import { AppState } from "react-native";
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Enhanced session persistence handling
const setupSupabaseSessionPersistence = async () => {
  try {
    // Check if we have a stored session
    const sessionString = await AsyncStorage.getItem("supabase-session");

    if (sessionString) {
      const session = JSON.parse(sessionString);

      // If session exists but is expired, try to refresh it
      if (session && new Date(session.expires_at) < new Date()) {
        await supabase.auth.refreshSession();
      }
    }
  } catch (error) {
    console.error("Error setting up session persistence:", error);
  }
};

// Run the setup
setupSupabaseSessionPersistence();

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
    // Try to refresh the session when app comes to foreground
    supabase.auth.refreshSession();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
