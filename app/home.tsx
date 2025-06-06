import React from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { useRouter } from "expo-router";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  // Redirect to landing page if not authenticated
  React.useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  // Handle logout
  const handleLogout = async () => {
    const { error } = await signOut();
    if (!error) {
      router.replace("/");
    } else {
      console.error("Error signing out:", error);
    }
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <Center className="flex-1 bg-background-0">
        <Spinner size="large" color="#6366f1" />
        <Text className="mt-4 text-typography-500">Loading...</Text>
      </Center>
    );
  }

  // Redirect if no user is found
  if (!user) {
    return null;
  }

  return (
    <Box className="flex-1 bg-background-0 p-4">
      <HStack className="justify-between items-center mb-6">
        <Heading size="2xl" className="text-primary-500 font-bold">
          SmarTODO
        </Heading>
        <Button
          variant="outline"
          action="secondary"
          size="sm"
          onPress={handleLogout}
        >
          <ButtonText>Logout</ButtonText>
        </Button>
      </HStack>

      <Box className="bg-background-50 rounded-lg p-4 shadow-sm mb-6">
        <Text className="text-typography-500 font-medium mb-1">
          Welcome back
        </Text>
        <Text className="text-typography-900 font-bold">
          {user?.email || "User"}
        </Text>
      </Box>

      <VStack space="md" className="mb-6">
        <Heading size="lg" className="text-typography-900">
          Your Tasks
        </Heading>

        {/* Placeholder for tasks - to be implemented */}
        <Center className="bg-background-50 rounded-lg p-8 border border-background-200">
          <Text className="text-typography-500 text-center">
            No tasks yet. Start adding some tasks to get organized!
          </Text>
          <Button className="mt-4" variant="solid" action="primary">
            <ButtonText>Add New Task</ButtonText>
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}
