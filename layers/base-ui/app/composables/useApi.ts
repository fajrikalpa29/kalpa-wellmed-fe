import type { NitroFetchRequest, NitroFetchOptions, TypedInternalResponse, } from "nitropack";
import type { FetchOptions } from "ofetch";
export const $api = <
  T = unknown,
  R extends NitroFetchRequest = NitroFetchRequest >( request: R, opts?: FetchOptions | undefined ): Promise<TypedInternalResponse<R, T>> => {
  const fetchCustom = $fetch.create({
    async onRequestError({ request, options, error }) {
      throw error;
    },
    async onResponse({ request, response, options, error }) {
      // const {setAcl} = useSystemStore()
      const logout = async () => {
        await $fetch("/api/auth/logout").then(() => {
          navigateTo("/login", { replace: true });
        });
      };
      if (response.status === 200) {
        return response._data;
      }else if(response.status === 401) {
        await logout();
        showAlert('Oops', 'Sesi anda telah habis, silahkan login kembali', 'error');
      }
      else {
        throw error ?? response._data;
      }
    },
    async onResponseError({ request, response, options, error }) {
      throw error;
    },
  });

  return fetchCustom<T, R>(request, opts as NitroFetchOptions<R>);
};
