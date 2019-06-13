# 参考资料

[The Simplest Guide To OAuth 2.0](https://medium.com/@darutk/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb)

[OAuth2 协议登陆Github Api](https://github.com/ruanyf/node-oauth-demo)

[OAuth2 协议登录google Api](https://developers.google.com/identity/protocols/OAuth2)

[OAuth2 协议登录QQ Api](http://wiki.open.qq.com/wiki/mobile/OAuth2.0%E7%AE%80%E4%BB%8B)

[WIKI对OAuth协议的解释](https://zh.wikipedia.org/zh/%E5%BC%80%E6%94%BE%E6%8E%88%E6%9D%83)

# 简述步骤

- 被传递的数据（例如用户的数据）
- 有一个管理用户数据的服务器（资源服务器）
- 有一个客户端应用程序，想要访问用户的数据
- 资源服务器提供一个可访问Api
- 客户端请求资源服务器，资源服务器进行数据返回（`恶意程序访问时，也会进行返回，这样会造成数据泄露`）
- 因此我们需要做一个`Access Token`（预先向客户端应用程序提供“访问令牌”。访问令牌表示所述客户端应用程序已被授予访问用户数据的权限。）
- 客户端程序在请求时携带`Access Token`，资源服务器提取请求中的`Access Token`并确认`访问令牌`表示客户端应用程序具有访问用户数据的权限，确认后，返回用户数据
- 要使此机制起作用，必须事先向客户端应用程序提供访问令牌。因此，我们需要有人签发访问令（`签发访问令的人被称为“授权服务器”`）。
- 授权服务器生成访问令牌并向客户端应用程序发出访问令牌,客户端应用程序使用访问令牌请求用户的数据。资源服务器从请求中提取访问令牌，确认访问令牌有权访问用户的数据，并将用户的数据返回给客户端应用程序

# 关键字

- 资源服务器（从请求头中获取`Access Token`判断用户是否要获取数据，获取哪部分数据，避免恶意程序进攻）
- 客户端应用程序（获取授权服务器的`Access Token`，并携带在请求中，请求资源服务器）
- 授权服务器（生成`Access Token`）

OAuth2.0客户端一共有4种授权模式
- 授权码模式（authorization code)
- 简化模式（implicit）
- 密码模式（resource owner password credentials）
- 客户端模式（client credentials）

# Demo

[OAuth2.0登陆Github](https://github.com/blacklisten/OAuth/tree/master/GithubOAuth2.0)
