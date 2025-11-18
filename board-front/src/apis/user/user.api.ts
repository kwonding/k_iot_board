import type { ApiResponse } from "@/types/common/ApiResponse";
import { privateApi } from "../common/axiosInstance";
import type { UserDetailResponse, UserListResponse } from "@/types/user/user.dto";
import { USER_PATH } from "./user.path";

export const userApi = {
  getUser: async (userId: number): Promise<UserDetailResponse> => {
    const res = await privateApi.get<ApiResponse<UserDetailResponse>>(
      USER_PATH.BY_ID(userId)
    );
    return res.data.data;
  },

  getUserList: async (): Promise<UserListResponse> => {
    const res = await privateApi.get<ApiResponse<UserListResponse>>(
      USER_PATH.LIST
    );
    return res.data.data;
  },
};

// 위의 코드와 동일
// export async function fetchUserById(userId: number): Promise<UserDetail> {
//   const res = await publicApi.get<ApiResponse<UserDetail>>(API_ROUTES.USERS.DETAIL(userId));
//   return res.data.data;
// }
