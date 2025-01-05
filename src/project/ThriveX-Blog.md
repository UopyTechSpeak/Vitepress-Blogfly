<p align="center">
    <a href="https://liuyuyang.net" target="_blank">
        <img width="100" src="https://bu.dusays.com/2024/11/17/6739adf188f64.png" alt="ThriveX logo" style="width:100px" />
    </a>
</p>

<p align="center" style="font-size:20px; font-weight:700;">ThriveX</p>

<p align="center" style="margin-bottom:10px">A modern blog management system that is young, aesthetically pleasing, fully open-source, and free of charge</p>

![](https://bu.dusays.com/2024/11/25/67445b7df3742.png)


# 🎉 ThriveX Modern Blog Management System

🎉 `ThriveX` It is a modern blog management system that is young, aesthetically pleasing, fully open-source, and free of charge. It is based on `NestJS` + `Spring Boot` the product, all technology stacks are currently the most mainstream on the market


🗂️ **Project Preview：** [https://liuyuyang.net/](https://liuyuyang.net/)



🛠️ **Technical Architecture：**

front end：React、**NextJS**、**TailwindCSS**、TypeScript、Zustand、React Form Hooks、Echarts、Antd、Scss、Vercel、Docker


backend：**Spring Boot**、Mybatis Plus、MySQL、Qiniu、Swagger、Docker



❤️ **Original intention of the project：**

I have always been interested in the field of website development and have wanted to have my own website since I was young, so I embarked on it `Web` The journey of full stack development, aspiring to one day develop a website of my own. Currently, over time `2` more than a year old, alone from`0` arrive `1` independently completing the full stack development of the entire project can be considered as fulfilling a childhood wish



## Project Demonstration

### front end

Only a portion of the front-end interface will be demonstrated here. You can check it out for yourself **->** [https://liuyuyang.net](https://liuyuyang.net)
![home page](https://bu.dusays.com/2024/10/28/671f7a44631d7.png)
![footprint](https://bu.dusays.com/2024/09/17/66e97036dddcb.png)



### Control end

![data analysis](https://bu.dusays.com/2024/09/17/66e97035726ae.png)
![file system](https://bu.dusays.com/2024/09/17/66e97031cd456.png)



## project operation

I have been quite busy lately. I will write a detailed project deployment tutorial in a while. Here, I will briefly teach you how to run it locally

**Front end or control end**

Environment: Nodejs18 and above

```
npm i
npm run dev
```

Backend account：`admin`   password：`123456`



Create in the root directory of the control side project `.env` file, add the following configuration

```bash
# Baidu Statistics related configurations
VITE_BAIDU_TONGJI_KEY=
VITE_BAIDU_TONGJI_SECRET_KEY=
VITE_BAIDU_TONGJI_SITE_ID=
VITE_BAIDU_TONGJI_ACCESS_TOKEN=
VITE_BAIDU_TONGJI_REFRESH_TOKEN=

# Starfire AI related configurations
VITE_AI_APIPassword=
VITE_AI_MODEL=
```

Baidu interface application address：[https://tongji.baidu.com/api/manual/Chapter2/openapi.html](https://tongji.baidu.com/api/manual/Chapter2/openapi.html)

Application address for interface of Starfire large model：[https://www.xfyun.cn/](https://www.xfyun.cn/)



**backend**

environment：Java8 + MySQL8

install `maven` Dependency, configuration `application-dev.yml` related information

```yml
lyy:
  email:
    host: smtp.qq.com
    port: 465
    username: Your email account
    password: Your email authorization code

  oss:
    accessKey: Qiniu Cloud's Access Key
    secretKey: The SecretKey of Qiniu Cloud
    bucket: thrive
```

Importing the backend root directory `ThriveX.sql` database file, just run the project at the end



## Project Deployment

front end：[Click to jump](https://docs.liuyuyang.net/docs/项目部署/前端.html)

Control end：[Click to jump](https://docs.liuyuyang.net/docs/项目部署/控制端.html)

backend：[Click to jump](https://docs.liuyuyang.net/docs/项目部署/后端.html)



## Project Structure

```
├── public // Store public resources
├── src // Core source code
│   ├── api // All API interfaces
│   ├── app
│   │   ├── error.tsx // Customize error page
│   │   ├── favicon.ico // Project Icon
│   │   ├── layout.tsx // Website Layout
│   │   ├── loading.tsx // Customize loading page
│   │   ├── not-found.tsx // Customize 404 page
│   │   ├── page.tsx // home page
│   ├── assets // Store all resources of the project
│   │   ├── font
│   │   ├── image
│   │   └── svg
│   ├── components // Public components
│   ├── stores // Global data sharing
│   ├── styles // Global Style
│   ├── types // Global type
│   └── utils // Generic methods
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```




## Open source address

### Latest version (Nextjs+Spring Boot)

front end：[LiuYuYang01/ThriveX-Blog (github.com)](https://github.com/LiuYuYang01/ThriveX-Blog)

Control end：[LiuYuYang01/ThriveX-Admin (github.com)](https://github.com/LiuYuYang01/ThriveX-Admin)

backend：[LiuYuYang01/ThriveX-Server (github.com)](https://github.com/LiuYuYang01/ThriveX-Server)



### 旧版（Vue3 + Python Flask）

front end：[LiuYuYang01/Thrive-Blog (github.com)](https://github.com/LiuYuYang01/Thrive-Blog)

Control end：[LiuYuYang01/Thrive-Admin (github.com)](https://github.com/LiuYuYang01/Thrive-Admin)

backend：[LiuYuYang01/Thrive-Server (github.com)](https://github.com/LiuYuYang01/Thrive-Server)

![backend](https://bu.dusays.com/2024/09/17/66e96ca781d49.png)



## Open source protocol

In order to strengthen the ecosystem of the project, the author earnestly requests everyone to preserve it `ThriveX` Blog system copyright

In the project `Star` break through `2K` afterwards, everyone can freely choose to delete it `or` reserve

If the project is subjected to secondary development, it must ultimately be open sourced, copyrighted, and prohibited from any commercial activities

Finally, I hope everyone can comply with the open source agreement：**AGPL-3.0 license** 

Promote the spirit of open source, starting from you and me!

## For more information, please refer to the Chinese instructions
Chinese instructions：[Click to jump](https://github.com/LiuYuYang01/ThriveX-Blog/blob/main/README.md)