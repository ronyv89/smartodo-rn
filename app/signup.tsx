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
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Spinner } from "@/components/ui/spinner";
import { AlertCircleIcon } from "@/components/ui/icon";
import { useAuth } from "@/contexts/AuthContext";

export default function Signup() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = async () => {
    // Reset states
    setErrorMessage("");
    setPasswordError("");
    setIsSuccess(false);

    // Validate passwords match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Validate password strength (optional)
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(email, password);

      if (error) {
        console.error("Signup failed:", error);
        setErrorMessage(error.message || "Signup failed. Please try again.");
      } else {
        setIsSuccess(true);
        // Show success message before navigating to home page
        setTimeout(() => {
          router.replace("/home");
        }, 2000);
      }
    } catch (err) {
      console.error("Unexpected error during signup:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToLogin = () => {
    router.push("/login");
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
              Sign Up
            </Heading>
            <Text className="text-typography-500">
              Create your SmarTODO account
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

          <FormControl isInvalid={!!passwordError}>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Create a password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError("");
                }}
                secureTextEntry
                editable={!isLoading}
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                Must be at least 6 characters
              </FormControlHelperText>
            </FormControlHelper>
          </FormControl>

          <FormControl isInvalid={!!passwordError}>
            <FormControlLabel>
              <FormControlLabelText>Confirm Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  setPasswordError("");
                }}
                secureTextEntry
                editable={!isLoading}
              />
            </Input>
            {passwordError ? (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>{passwordError}</FormControlErrorText>
              </FormControlError>
            ) : null}
          </FormControl>

          {errorMessage ? (
            <Box className="mt-2">
              <Text className="text-red-500">{errorMessage}</Text>
            </Box>
          ) : null}

          <Button
            size="lg"
            variant="solid"
            action={isSuccess ? "positive" : "primary"}
            className="w-full mt-4"
            onPress={handleSignup}
            disabled={isLoading || isSuccess}
          >
            {isLoading ? (
              <Spinner color="white" />
            ) : isSuccess ? (
              <ButtonText>Account Created!</ButtonText>
            ) : (
              <ButtonText>Create Account</ButtonText>
            )}
          </Button>

          <Center>
            <Pressable onPress={navigateToLogin}>
              <Text className="text-primary-500">
                Already have an account? Login
              </Text>
            </Pressable>
          </Center>
        </VStack>
      </Center>
    </Box>
  );
}
