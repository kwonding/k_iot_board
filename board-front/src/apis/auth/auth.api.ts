import type { LoginResponse, LoginRequest } from "@/types/auth.type";
import type { ApiResponse } from "@/types/common/ApiResponse";
import { publicApi } from "../common/axiosInstance";
import { AUTH_PATH } from "./auth.path";

export const authApi = {
  login: async (req: LoginRequest): Promise<LoginResponse> => {
    // axios.메서드<메서드반환타입>();
    const res = await publicApi.post<ApiResponse<LoginResponse>>(
      AUTH_PATH.LOGIN,
      req
    );
    return res.data.data;
  },
};

// 로그인 요청 - 위의 코드와 동일
// export async function login(req: LoginRequest): Promise<LoginResponse> {
//   const res = await publicApi.post<ApiResponse<LoginResponse>>(API_ROUTES.AUTH.LOGIN, req);
//   return res.data.data;
// }
