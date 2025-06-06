import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { Input, InputField } from "@/components/ui/input";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Spinner } from "@/components/ui/spinner";
import { AlertCircleIcon } from "@/components/ui/icon";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async () => {
    // Reset states
    setErrorMessage("");
    setIsSuccess(false);
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        console.error("Login failed:", error);
        setErrorMessage(error.message || "Login failed. Please try again.");
      } else {
        setIsSuccess(true);
        // Navigate to home page after showing success message
        setTimeout(() => {
          router.replace("/home");
        }, 1000); // Delay navigation to show success state
      }
    } catch (err) {
      console.error("Unexpected error during login:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToSignup = () => {
    router.push("/signup");
  };

  const navigateBack = () => {
    router.back();
  };

  return (
    <Box className="flex-1 bg-background-0 p-4">
      <Pressable onPress={navigateBack} className="mb-4">
        <Text className="text-primary-500">← Back</Text>
      </Pressable>

      <Center className="flex-1">
        <VStack space="xl" className="w-full max-w-[400px]">
          <VStack space="xs" className="items-center mb-4">
            <Heading size="3xl" className="text-primary-500 font-bold">
              Login
            </Heading>
            <Text className="text-typography-500">
              Sign in to your SmarTODO account
            </Text>
          </VStack>

          <FormControl isInvalid={!!errorMessage}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setErrorMessage("");
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!isLoading}
              />
            </Input>
          </FormControl>

          <FormControl isInvalid={!!errorMessage}>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Enter your password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setErrorMessage("");
                }}
                secureTextEntry
                editable={!isLoading}
              />
            </Input>
            {errorMessage ? (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>{errorMessage}</FormControlErrorText>
              </FormControlError>
            ) : null}
          </FormControl>

          <Button
            size="lg"
            variant="solid"
            action={isSuccess ? "positive" : "primary"}
            className="w-full mt-4"
            onPress={handleLogin}
            disabled={isLoading || isSuccess}
          >
            {isLoading ? (
              <Spinner color="white" />
            ) : isSuccess ? (
              <ButtonText>Success!</ButtonText>
            ) : (
              <ButtonText>Login</ButtonText>
            )}
          </Button>

          <Center>
            <Pressable onPress={navigateToSignup}>
              <Text className="text-primary-500">
                Don't have an account? Sign up
              </Text>
            </Pressable>
          </Center>
        </VStack>
      </Center>
    </Box>
  );
}
