## 上马自动签到 [![Run Auto Sign](https://github.com/zhaohongxuan/shangma_auto_sign/actions/workflows/auto-sign.yaml/badge.svg)](https://github.com/zhaohongxuan/shangma_auto_sign/actions/workflows/auto-sign.yaml)

### 基于 Node.js + GitHub Action 实现上海马拉松官网每日签到

### Use 使用

1. Fork本项目（顺手点Star以示鼓励～🥳）
2. 在Repo的Setting页面，添加名为上马官网的用户名：`SM_USERNAME`和密码：`SM_PASSWORD`的Secret 
3. 手动测试运行
<img width="1444" alt="image" src="https://github.com/zhaohongxuan/shangma_auto_sign/assets/8613196/695683c9-fbc2-4cab-9ef8-41e2ddf59b78">
在控制台应该能看到 `签到成功/请勿重复签到` 的提示
<img width="990" alt="image" src="https://github.com/zhaohongxuan/shangma_auto_sign/assets/8613196/399e89f7-2ad6-486e-9e67-8953564ec528">


### 关于Job执行时间
签到Job执行时间是**UTC时间0点**，也就是**北京时间8点**执行，**不过由于GitHub的负载比较重**，真正签到时间可能延后一段时间，一般是几十分钟，这个延迟时间取决于GitHub Action的负载。

### 申明
- 本项目仅做学习交流, 禁止用于各种非法途径
- Auto Sign-in run successful on Fri Sep 13 06:46:04 UTC 2024
- Auto Sign-in run successful on Sat Sep 14 00:42:53 UTC 2024
- Auto Sign-in run successful on Sun Sep 15 00:49:58 UTC 2024
- Auto Sign-in run successful on Mon Sep 16 00:46:55 UTC 2024
- Auto Sign-in run successful on Tue Sep 17 00:36:34 UTC 2024
- Auto Sign-in run successful on Wed Sep 18 00:43:25 UTC 2024
- Auto Sign-in run successful on Thu Sep 19 00:44:07 UTC 2024
- Auto Sign-in run successful on Fri Sep 20 00:44:01 UTC 2024
- Auto Sign-in run successful on Sat Sep 21 00:43:29 UTC 2024
- Auto Sign-in run successful on Sun Sep 22 00:50:09 UTC 2024
- Auto Sign-in run successful on Mon Sep 23 00:46:06 UTC 2024
- Auto Sign-in run successful on Tue Sep 24 00:45:36 UTC 2024
- Auto Sign-in run successful on Wed Sep 25 00:46:27 UTC 2024
- Auto Sign-in run successful on Thu Sep 26 00:45:11 UTC 2024
- Auto Sign-in run successful on Fri Sep 27 00:45:37 UTC 2024
- Auto Sign-in run successful on Sat Sep 28 00:45:00 UTC 2024
- Auto Sign-in run successful on Sun Sep 29 00:51:09 UTC 2024
- Auto Sign-in run successful on Mon Sep 30 00:48:00 UTC 2024
- Auto Sign-in run successful on Tue Oct  1 00:51:42 UTC 2024
- Auto Sign-in run successful on Wed Oct  2 00:45:32 UTC 2024
- Auto Sign-in run successful on Thu Oct  3 00:45:38 UTC 2024
- Auto Sign-in run successful on Fri Oct  4 00:45:47 UTC 2024
- Auto Sign-in run successful on Sat Oct  5 00:44:59 UTC 2024
- Auto Sign-in run successful on Sun Oct  6 00:50:47 UTC 2024
- Auto Sign-in run successful on Mon Oct  7 00:48:17 UTC 2024
- Auto Sign-in run successful on Tue Oct  8 00:45:24 UTC 2024
- Auto Sign-in run successful on Wed Oct  9 00:45:16 UTC 2024
- Auto Sign-in run successful on Thu Oct 10 00:45:23 UTC 2024
- Auto Sign-in run successful on Fri Oct 11 00:45:27 UTC 2024
- Auto Sign-in run successful on Sat Oct 12 00:44:23 UTC 2024
- Auto Sign-in run successful on Sun Oct 13 00:50:23 UTC 2024
- Auto Sign-in run successful on Mon Oct 14 00:48:08 UTC 2024
- Auto Sign-in run successful on Tue Oct 15 00:46:30 UTC 2024
- Auto Sign-in run successful on Wed Oct 16 00:46:16 UTC 2024
- Auto Sign-in run successful on Thu Oct 17 00:45:51 UTC 2024
- Auto Sign-in run successful on Fri Oct 18 00:45:50 UTC 2024
- Auto Sign-in run successful on Sat Oct 19 00:45:12 UTC 2024
- Auto Sign-in run successful on Sun Oct 20 00:51:33 UTC 2024
- Auto Sign-in run successful on Mon Oct 21 00:48:29 UTC 2024
- Auto Sign-in run successful on Tue Oct 22 00:46:41 UTC 2024
- Auto Sign-in run successful on Wed Oct 23 00:50:42 UTC 2024
- Auto Sign-in run successful on Thu Oct 24 00:46:21 UTC 2024
- Auto Sign-in run successful on Fri Oct 25 00:46:49 UTC 2024
- Auto Sign-in run successful on Fri Oct 25 08:46:06 UTC 2024
- Auto Sign-in run successful on Sat Oct 26 00:41:35 UTC 2024
- Auto Sign-in run successful on Sun Oct 27 00:46:36 UTC 2024
- Auto Sign-in run successful on Mon Oct 28 00:45:02 UTC 2024
- Auto Sign-in run successful on Tue Oct 29 00:43:55 UTC 2024
- Auto Sign-in run successful on Wed Oct 30 00:43:09 UTC 2024
- Auto Sign-in run successful on Thu Oct 31 00:43:29 UTC 2024
- Auto Sign-in run successful on Fri Nov  1 00:47:28 UTC 2024
- Auto Sign-in run successful on Sat Nov  2 00:42:05 UTC 2024
- Auto Sign-in run successful on Sun Nov  3 00:47:07 UTC 2024
- Auto Sign-in run successful on Mon Nov  4 00:44:36 UTC 2024
- Auto Sign-in run successful on Tue Nov  5 00:42:10 UTC 2024
- Auto Sign-in run successful on Wed Nov  6 00:41:58 UTC 2024
- Auto Sign-in run successful on Thu Nov  7 00:42:15 UTC 2024
- Auto Sign-in run successful on Fri Nov  8 00:41:56 UTC 2024
- Auto Sign-in run successful on Sat Nov  9 00:41:05 UTC 2024
- Auto Sign-in run successful on Sun Nov 10 00:45:14 UTC 2024
- Auto Sign-in run successful on Mon Nov 11 00:43:37 UTC 2024
- Auto Sign-in run successful on Tue Nov 12 00:41:40 UTC 2024
- Auto Sign-in run successful on Wed Nov 13 00:42:34 UTC 2024
- Auto Sign-in run successful on Thu Nov 14 00:42:35 UTC 2024
- Auto Sign-in run successful on Fri Nov 15 00:45:07 UTC 2024
- Auto Sign-in run successful on Sat Nov 16 00:44:16 UTC 2024
- Auto Sign-in run successful on Sun Nov 17 00:48:55 UTC 2024
- Auto Sign-in run successful on Mon Nov 18 00:47:08 UTC 2024
- Auto Sign-in run successful on Tue Nov 19 00:45:11 UTC 2024
- Auto Sign-in run successful on Wed Nov 20 00:44:35 UTC 2024
- Auto Sign-in run successful on Thu Nov 21 00:44:46 UTC 2024
- Auto Sign-in run successful on Fri Nov 22 00:45:29 UTC 2024
- Auto Sign-in run successful on Sat Nov 23 00:43:41 UTC 2024
- Auto Sign-in run successful on Sun Nov 24 00:49:21 UTC 2024
- Auto Sign-in run successful on Mon Nov 25 00:46:40 UTC 2024
- Auto Sign-in run successful on Tue Nov 26 00:45:29 UTC 2024
- Auto Sign-in run successful on Wed Nov 27 00:45:42 UTC 2024
- Auto Sign-in run successful on Thu Nov 28 00:46:05 UTC 2024
- Auto Sign-in run successful on Fri Nov 29 00:45:54 UTC 2024
- Auto Sign-in run successful on Sat Nov 30 00:44:46 UTC 2024
- Auto Sign-in run successful on Sun Dec  1 00:56:05 UTC 2024
- Auto Sign-in run successful on Mon Dec  2 00:49:12 UTC 2024
- Auto Sign-in run successful on Tue Dec  3 00:48:00 UTC 2024
- Auto Sign-in run successful on Wed Dec  4 00:47:36 UTC 2024
- Auto Sign-in run successful on Thu Dec  5 00:47:32 UTC 2024
- Auto Sign-in run successful on Fri Dec  6 00:46:55 UTC 2024
- Auto Sign-in run successful on Sat Dec  7 00:46:04 UTC 2024
- Auto Sign-in run successful on Sun Dec  8 00:52:07 UTC 2024
- Auto Sign-in run successful on Mon Dec  9 00:49:54 UTC 2024
- Auto Sign-in run successful on Tue Dec 10 00:48:39 UTC 2024
- Auto Sign-in run successful on Wed Dec 11 00:47:10 UTC 2024
- Auto Sign-in run successful on Thu Dec 12 00:47:05 UTC 2024
- Auto Sign-in run successful on Fri Dec 13 00:48:02 UTC 2024
- Auto Sign-in run successful on Sat Dec 14 00:45:27 UTC 2024
- Auto Sign-in run successful on Sun Dec 15 00:52:21 UTC 2024
- Auto Sign-in run successful on Mon Dec 16 00:50:18 UTC 2024
- Auto Sign-in run successful on Tue Dec 17 00:47:17 UTC 2024
- Auto Sign-in run successful on Wed Dec 18 00:45:08 UTC 2024
- Auto Sign-in run successful on Thu Dec 19 00:45:32 UTC 2024
- Auto Sign-in run successful on Fri Dec 20 00:43:15 UTC 2024
- Auto Sign-in run successful on Sat Dec 21 00:42:33 UTC 2024
- Auto Sign-in run successful on Sun Dec 22 00:47:34 UTC 2024
- Auto Sign-in run successful on Mon Dec 23 00:44:38 UTC 2024
- Auto Sign-in run successful on Tue Dec 24 00:43:07 UTC 2024
- Auto Sign-in run successful on Wed Dec 25 00:42:24 UTC 2024
- Auto Sign-in run successful on Thu Dec 26 00:42:34 UTC 2024
- Auto Sign-in run successful on Fri Dec 27 00:42:59 UTC 2024
- Auto Sign-in run successful on Sat Dec 28 00:42:04 UTC 2024
- Auto Sign-in run successful on Sun Dec 29 00:47:59 UTC 2024
- Auto Sign-in run successful on Mon Dec 30 00:44:49 UTC 2024
- Auto Sign-in run successful on Tue Dec 31 00:42:45 UTC 2024
- Auto Sign-in run successful on Wed Jan  1 00:48:11 UTC 2025
- Auto Sign-in run successful on Thu Jan  2 00:42:45 UTC 2025
- Auto Sign-in run successful on Fri Jan  3 00:43:12 UTC 2025
- Auto Sign-in run successful on Sat Jan  4 00:42:10 UTC 2025
- Auto Sign-in run successful on Sun Jan  5 00:47:39 UTC 2025
- Auto Sign-in run successful on Mon Jan  6 00:45:27 UTC 2025
- Auto Sign-in run successful on Tue Jan  7 00:43:32 UTC 2025
- Auto Sign-in run successful on Wed Jan  8 00:43:31 UTC 2025
- Auto Sign-in run successful on Thu Jan  9 00:43:11 UTC 2025
- Auto Sign-in run successful on Fri Jan 10 00:44:17 UTC 2025
- Auto Sign-in run successful on Sat Jan 11 00:43:36 UTC 2025
- Auto Sign-in run successful on Sun Jan 12 00:48:37 UTC 2025
- Auto Sign-in run successful on Mon Jan 13 00:46:38 UTC 2025
- Auto Sign-in run successful on Tue Jan 14 00:41:24 UTC 2025
- Auto Sign-in run successful on Wed Jan 15 00:42:24 UTC 2025
- Auto Sign-in run successful on Thu Jan 16 00:41:55 UTC 2025
- Auto Sign-in run successful on Fri Jan 17 00:41:38 UTC 2025
- Auto Sign-in run successful on Sat Jan 18 00:41:02 UTC 2025
- Auto Sign-in run successful on Sun Jan 19 00:45:36 UTC 2025
- Auto Sign-in run successful on Mon Jan 20 00:43:01 UTC 2025
- Auto Sign-in run successful on Tue Jan 21 00:41:42 UTC 2025
- Auto Sign-in run successful on Wed Jan 22 00:42:53 UTC 2025
- Auto Sign-in run successful on Thu Jan 23 00:42:14 UTC 2025
- Auto Sign-in run successful on Fri Jan 24 00:42:10 UTC 2025
- Auto Sign-in run successful on Sat Jan 25 00:40:57 UTC 2025
- Auto Sign-in run successful on Sun Jan 26 00:43:22 UTC 2025
- Auto Sign-in run successful on Mon Jan 27 00:43:20 UTC 2025
- Auto Sign-in run successful on Tue Jan 28 00:42:24 UTC 2025
- Auto Sign-in run successful on Wed Jan 29 00:42:24 UTC 2025
- Auto Sign-in run successful on Thu Jan 30 00:41:35 UTC 2025
- Auto Sign-in run successful on Fri Jan 31 00:42:14 UTC 2025
- Auto Sign-in run successful on Sat Feb  1 00:45:09 UTC 2025
- Auto Sign-in run successful on Sun Feb  2 00:45:02 UTC 2025
- Auto Sign-in run successful on Mon Feb  3 00:43:38 UTC 2025
- Auto Sign-in run successful on Tue Feb  4 00:42:22 UTC 2025
- Auto Sign-in run successful on Wed Feb  5 00:42:46 UTC 2025
- Auto Sign-in run successful on Thu Feb  6 00:42:58 UTC 2025
- Auto Sign-in run successful on Fri Feb  7 00:43:00 UTC 2025
- Auto Sign-in run successful on Sat Feb  8 00:41:55 UTC 2025
- Auto Sign-in run successful on Sun Feb  9 00:45:46 UTC 2025
- Auto Sign-in run successful on Mon Feb 10 00:44:06 UTC 2025
- Auto Sign-in run successful on Tue Feb 11 00:42:59 UTC 2025
- Auto Sign-in run successful on Wed Feb 12 00:43:16 UTC 2025
- Auto Sign-in run successful on Thu Feb 13 00:43:14 UTC 2025
- Auto Sign-in run successful on Fri Feb 14 00:43:04 UTC 2025
- Auto Sign-in run successful on Sat Feb 15 00:42:27 UTC 2025
- Auto Sign-in run successful on Sun Feb 16 00:47:26 UTC 2025
- Auto Sign-in run successful on Mon Feb 17 00:45:22 UTC 2025
- Auto Sign-in run successful on Tue Feb 18 00:42:57 UTC 2025
- Auto Sign-in run successful on Wed Feb 19 00:43:20 UTC 2025
- Auto Sign-in run successful on Thu Feb 20 00:43:42 UTC 2025
- Auto Sign-in run successful on Fri Feb 21 00:43:45 UTC 2025
- Auto Sign-in run successful on Sat Feb 22 00:41:57 UTC 2025
- Auto Sign-in run successful on Sun Feb 23 00:47:23 UTC 2025
- Auto Sign-in run successful on Mon Feb 24 00:45:07 UTC 2025
- Auto Sign-in run successful on Tue Feb 25 00:44:15 UTC 2025
- Auto Sign-in run successful on Wed Feb 26 00:43:51 UTC 2025
- Auto Sign-in run successful on Thu Feb 27 00:44:10 UTC 2025
- Auto Sign-in run successful on Fri Feb 28 00:44:18 UTC 2025
- Auto Sign-in run successful on Sat Mar  1 00:49:04 UTC 2025
- Auto Sign-in run successful on Sun Mar  2 00:47:51 UTC 2025
- Auto Sign-in run successful on Mon Mar  3 00:46:20 UTC 2025
- Auto Sign-in run successful on Tue Mar  4 00:45:01 UTC 2025
- Auto Sign-in run successful on Wed Mar  5 00:44:59 UTC 2025
- Auto Sign-in run successful on Thu Mar  6 00:45:06 UTC 2025
- Auto Sign-in run successful on Fri Mar  7 00:44:50 UTC 2025
- Auto Sign-in run successful on Sat Mar  8 00:35:55 UTC 2025
- Auto Sign-in run successful on Sun Mar  9 00:39:42 UTC 2025
- Auto Sign-in run successful on Mon Mar 10 00:38:44 UTC 2025
- Auto Sign-in run successful on Tue Mar 11 00:45:12 UTC 2025
- Auto Sign-in run successful on Wed Mar 12 00:44:39 UTC 2025
- Auto Sign-in run successful on Thu Mar 13 00:45:31 UTC 2025
- Auto Sign-in run successful on Fri Mar 14 00:44:32 UTC 2025
- Auto Sign-in run successful on Sat Mar 15 00:44:24 UTC 2025
- Auto Sign-in run successful on Sun Mar 16 00:50:19 UTC 2025
- Auto Sign-in run successful on Mon Mar 17 00:47:41 UTC 2025
- Auto Sign-in run successful on Tue Mar 18 00:45:21 UTC 2025
- Auto Sign-in run successful on Wed Mar 19 00:45:50 UTC 2025
- Auto Sign-in run successful on Thu Mar 20 00:44:51 UTC 2025
- Auto Sign-in run successful on Fri Mar 21 00:46:14 UTC 2025
- Auto Sign-in run successful on Sat Mar 22 00:44:42 UTC 2025
- Auto Sign-in run successful on Sun Mar 23 00:50:52 UTC 2025
- Auto Sign-in run successful on Mon Mar 24 00:48:35 UTC 2025
- Auto Sign-in run successful on Tue Mar 25 00:46:40 UTC 2025
- Auto Sign-in run successful on Wed Mar 26 00:46:15 UTC 2025
- Auto Sign-in run successful on Thu Mar 27 00:46:08 UTC 2025
- Auto Sign-in run successful on Fri Mar 28 00:46:01 UTC 2025
- Auto Sign-in run successful on Sat Mar 29 00:45:39 UTC 2025
- Auto Sign-in run successful on Sun Mar 30 00:51:48 UTC 2025
- Auto Sign-in run successful on Mon Mar 31 00:50:43 UTC 2025
- Auto Sign-in run successful on Tue Apr  1 00:54:15 UTC 2025
- Auto Sign-in run successful on Wed Apr  2 00:47:29 UTC 2025
- Auto Sign-in run successful on Thu Apr  3 00:46:30 UTC 2025
- Auto Sign-in run successful on Fri Apr  4 00:46:34 UTC 2025
- Auto Sign-in run successful on Sat Apr  5 00:45:30 UTC 2025
- Auto Sign-in run successful on Sun Apr  6 00:51:26 UTC 2025
- Auto Sign-in run successful on Mon Apr  7 00:49:41 UTC 2025
- Auto Sign-in run successful on Tue Apr  8 00:46:31 UTC 2025
- Auto Sign-in run successful on Wed Apr  9 00:46:45 UTC 2025
