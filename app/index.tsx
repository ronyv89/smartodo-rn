import React from "react";
import Gradient from "@/assets/Icons/Gradient";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Redirect to landing page if not authenticated
  useEffect(() => {
    if (!loading && user) {
      router.replace("/home");
    }
  }, [loading, user, router]);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <Box className="flex-1 bg-background-0 h-[100vh]">
      {/* Background gradient */}
      <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px] opacity-50">
        <Gradient />
      </Box>

      {/* Main content */}
      <Center className="flex-1">
        <VStack space="xl" className="items-center justify-center">
          {/* Logo */}
          <VStack space="xs" className="items-center mb-8">
            <Heading size="4xl" className="text-primary-500 font-bold">
              SmarTODO
            </Heading>
            <Text className="text-typography-500 text-lg">
              Your smart task management solution
            </Text>
          </VStack>

          {/* Auth buttons */}
          <VStack space="md" className="w-[300px]">
            <Button
              size="lg"
              variant="solid"
              action="primary"
              className="w-full"
              onPress={handleLogin}
            >
              <ButtonText>Login</ButtonText>
            </Button>

            <Button
              size="lg"
              variant="outline"
              action="primary"
              className="w-full"
              onPress={handleSignup}
            >
              <ButtonText>Sign Up</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
}
