import { updatePassword } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdatePassword(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      if (callbacks?.onSuccess) callbacks.onSuccess(data);
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
