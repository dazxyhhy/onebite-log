import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import type { Session } from "@supabase/supabase-js";

type State = {
  isLoaded: boolean;
  // supabase에서 제공하는 Session 타입이거나 -> access token refresh token 등 정보 보관하는 객체.
  session: Session | null;
};
const initialState = {
  isLoaded: false,
  session: null,
} as State;

const useSessionStore = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        setSession: (session: Session | null) => {
          set({ session, isLoaded: true });
        },
      },
    })),
    {
      name: "sessionStore",
    },
  ),
);

// 3가지의 CUSTOM HOOK 생성
export const useSession = () => {
  const session = useSessionStore((store) => store.session);
  return session;
};

export const useIsSessionLoaded = () => {
  const isSessionLoaded = useSessionStore((store) => store.isLoaded);
  return isSessionLoaded;
};

export const useSetSession = () => {
  const setSession = useSessionStore((store) => store.actions.setSession);
  return setSession;
};
