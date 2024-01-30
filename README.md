# http-client-axios

基于 `axios` 封装业务级别的工具库

# TODO List

具备以下能力

- [ ] 自动鉴权
  - [ ] 重试次数
  - [ ] 鉴权 URL 自定义配置
  - [ ] 自定义鉴权失败处理逻辑配置
  - [ ] 多请求并发鉴权控制
- [ ] 拦截器
  - [ ] 全局拦截器
  - [ ] 接口级别拦截器
  - [ ] 实例级别拦截器

# 如何使用

``` ts
const bizAxiosInstance = new HttpClient(config);

bizAxios.post(url, ...);
bizAxios.get(url, ...);
```
