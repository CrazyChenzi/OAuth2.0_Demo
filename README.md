# OAuth2.0

## 简述步骤

- 被传递的数据（例如用户的数据）
- 有一个管理用户数据的服务器（资源服务器）
- 有一个客户端应用程序，想要访问用户的数据
- 资源服务器提供一个可访问Api
- 客户端请求资源服务器，资源服务器进行数据返回（`恶意程序访问时，也会进行返回，这样会造成数据泄露`）
- 因此我们需要做一个`Access Token`（预先向客户端应用程序提供“访问令牌”。访问令牌表示所述客户端应用程序已被授予访问用户数据的权限。）
- 客户端程序在请求时携带`Access Token`，资源服务器提取请求中的`Access Token`并确认`访问令牌`表示客户端应用程序具有访问用户数据的权限，确认后，返回用户数据
- 要使此机制起作用，必须事先向客户端应用程序提供访问令牌。因此，我们需要有人签发访问令（`签发访问令的人被称为“授权服务器”`）。
- 授权服务器生成访问令牌并向客户端应用程序发出访问令牌,客户端应用程序使用访问令牌请求用户的数据。资源服务器从请求中提取访问令牌，确认访问令牌有权访问用户的数据，并将用户的数据返回给客户端应用程序

## 关键字

- 资源(Resource) black‘s message list
- 资源所有者(Resource Owner) black
- 客户端应用程序(Client)（获取授权服务器的`Access Token`，并携带在请求中，请求资源服务器）
- 资源服务器(Resource Server)（从请求头中获取`Access Token`判断用户是否要获取数据，获取哪部分数据，避免恶意程序进攻）
- 授权服务器(Authorization Server)（生成`Access Token`）

OAuth2.0客户端一共有4种授权模式
- 授权码模式（authorization code)
- 简化模式（implicit）
- 密码模式（resource owner password credentials）
- 客户端模式（client credentials

## Demo

[OAuth2.0登陆Github](https://github.com/blacklisten/OAuth/tree/master/GithubOAuth2.0)

## 参考

[The Simplest Guide To OAuth 2.0](https://medium.com/@darutk/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb)

[OAuth2 协议登陆Github Api](https://github.com/ruanyf/node-oauth-demo)

[OAuth2 协议登录google Api](https://developers.google.com/identity/protocols/OAuth2)

[OAuth2 协议登录QQ Api](http://wiki.open.qq.com/wiki/mobile/OAuth2.0%E7%AE%80%E4%BB%8B)

[WIKI对OAuth协议的解释](https://zh.wikipedia.org/zh/%E5%BC%80%E6%94%BE%E6%8E%88%E6%9D%83)

# OpenId

## 概述

`OpenID Connect has been developed by extending OAuth 2.0.`
OpenId是一个以用户为中心的数字身份识别框架，它具有开放、分散、自由等特性。OpenId的创建是基于这样一个概念：我们可以通过URI（或者URL网址）来识别一个网站。同样，我们也可以通过这样的方式来识别一个用户的身份。OpenId系统的身份认证就是通过URI来认证用户身份。目前绝大部分网站都是通过用户名与密码来登录认证用户身份，这就要求大家在每个你要使用的网站上注册一个帐号。如果使用OpenId，你可以在一个提供OpenId的网站上注册一个OpenId，以后你可以使用这个OpenId去登录支持OpenId的网站。这正是一处注册，到处使用的体现。

## OpenID相关术语

- End User：终端用户，使用OP与RP的服务
- Relying Party依赖方：简称RP，服务提供者，需要OP鉴权终端用户的身份
- OpenID Provider：OpenID提供者，简称OP，对用户身份鉴权
- Identifier标识符：标识符可以是一个HTTP、HTTPS或者XRI(可扩展的资源标识)
- User-Agent：实现了HTTP1.1协议的用户浏览器
- OP Endpoint URL：OP鉴权的URL，提供给RP使用
- OP Identifier：OP提供给终端用户的一个URI或者XRI,RP根据OP Identifier来解析出OP Endpoint URL与OP Version
- User-Supplied Identifier：终端用户使用的ID，可能是OP提供的OpenID，也可以是在RP注册的ID。RP可以根据User-Supplied Identifier来解析出OP Endpoint URL、OP Version与OP_Local Identifer
- Claimed Identifier：终端用户声明自己身份的一个标志，可以是一个URI或者XRI
- OP-Local Identifier：OP提供的局部ID

## 参考

[OpenID](https://www.cnblogs.com/catherine9192/p/9101400.html)

[Diagrams of All The OpenID Connect Flows](https://medium.com/@darutk/diagrams-of-all-the-openid-connect-flows-6968e3990660)

# OpenId 和 OAuth的区别

## 概述

OAuth解决了授权问题。OpenID解决了身份验证问题

`OpenID是Authentication`
> 认证就是证明你是谁，你是否是真实存在的，就好像，快递员来给你送快递，让你出示你的身份证，他确定你是本人后，把快递给你，这就是OpenID。

`OAuth是Authorization`
> 授权就是确定了你是谁后，又把属于你的东西给了别人

## 参考

[OAuth and OpenID explained with real life examples](https://medium.com/@abstarreveld/oauth-and-openid-explained-with-real-life-examples-bf40daa8049f)

> Summary
>
> OAuth solves an authorization problem. OpenID solves an authentication problem. The combination of both allows implementing
> security in a different way. Use scopes to describe one’s permissions, or claims to introduce a policy-based authorization
> strategy. OAuth and OpenID are modern solutions that require a different mindset. Roles are obsolete. Instead, policies apply to
> applications and identity. These policies may be applied in authorization servers and in applications. Decide where to implement
> them based on your security requirements.

[What's the difference between OpenID and OAuth?](https://stackoverflow.com/questions/1087031/whats-the-difference-between-openid-and-oauth)

[理解OpenID和OAuth的区别](https://blog.csdn.net/u010584641/article/details/79746525)

[Demystifying OAuth 2.0 and OpenId Connect (and SAML)](https://hackernoon.com/demystifying-oauth-2-0-and-openid-connect-and-saml-12aa4cf9fdba)
