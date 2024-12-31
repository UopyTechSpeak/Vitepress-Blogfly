# Vitepress-Blogfly(Website-based-on-Vitepress)

<p>Open source protocol：<a href="https://github.com/UopyTechSpeak/Vitepress-Blogfly/blob/main/LICENSE">MIT license</a></p>
<p>Open source address：<a href="https://github.com/UopyTechSpeak/Vitepress-Blogfly">GitHub</a></p>

<img src="./01.png" width="2199px"><img src="./02.png" width="2199px">

> [!NOTE]  
> This open source project is based on Vitepress and is a beautified version. It is open source for developers to use. Please note to label the original author, adaptation author, and open source agreement!
>
> Original project address:https://github.com/vuejs/vitepress
> 
> Beautification version project address:https://github.com/UopyTechSpeak/Vitepress-Blogfly

## Deployment Tutorial

> [!TIP]
> The following command needs to be installed here, otherwise it may run with errors!
> ```bash
> pnpm add -D busuanzi.pure.js
> ```
>
> ```bash
> pnpm add -D canvas-confetti
> ```

Build command:

```bash
npm run docs:build
```

Build output:
```bash
src/.vitepress/dist
```
Root directory:No need to fill in

It is recommended to deploy this project using CloudFlare's Workers and Pages. Because it is possible to automate the deployment of modified code on GitHub directly on CloudFlare, saving time and effort!

## Contribution and Feedback

- Submit on GitHub platform：[issues](https://github.com/UopyTechSpeak/Vitepress-Blogfly/issues)
- Send an email to：`kejiyuzhe@gmail.com`