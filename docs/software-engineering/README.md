---
sidebar: auto
---

# 概述
软件工程学科是在 20 世纪 60 年代后期，由软件工作者们研究消除软件危机的途径时逐渐形成的工程学科。  

## 软件危机
### 背景
+ 计算机系统发展的早期时代 (20 世纪 60 年代中期以前)  
  + 小规模程序  

  + 使用者和编写者是同一个(组)人

+ 计算机系统发展的第二个时代 (20 世纪 60 年代中期到 70 年代中期)  
  + 出现“软件作坊”  

  + 数量急剧膨胀

  + 维护软件时消耗的资源急剧上升：需要修改运行时的错误；需要修改程序以适应新需求、新硬件/操作系统环境  

  + 个体化特征让许多程序成为不可维护的程序

::: tip 两个主要问题
+ **如何开发**软件，以满足对软件日益增长的需求。  

+ **如何维护**数量不断膨胀的已有软件。
:::

### 表现
1. 对软件开发成本和进度估计不准确

2. 用户对“已经完成”的软件系统不满意

3. 软件产品的质量靠不住

4. 软件常常不可维护

5. 软件没有适当的文档资料

6. 软件成本在计算机系统总成本中所占比例逐年上升

7. 软件开发生产率提升的速度，跟不上计算机应用迅速普及深入的趋势

### 原因
+ 软件本身特点
  1. 软件缺乏“可见性”  
     + 开发过程进展难以衡量，质量较难评价

     + 管理和控制软件开发过程困难

  2. 软件规模庞大
      + 为在预定时间开发规模庞大的软件，需要多人合作，难以保证质量

      + 急需严格而科学的管理

+ 开发维护方法不正确
  1. 忽视软件需求分析的重要性  
     + 不同阶段对软件修改需要付出的代价是不同的

     + 没有做好准确的前期准备会造成生产出的“已完成”的软件完全不符合用户需求

  2. 只重视程序而忽略软件配置其余成分
     + 编写程序的工作量只有 10% ~ 20%

     + 一个软件完整的配置包括程序、文档和数据等成分

  3. 轻视软件维护
     + 软件寿命很长时需要改正使用中发现的每一个前在错误，也要适应环境变化（硬件、操作系统更新换代）

     + 维护占软件总费用的 55% ~ 70%

### 消除途径
+ 技术措施
  1. 认识到**软件是程序、数据和相关文档的完整集合**
     + **程序**是能够完成预定功能和性能的可执行的指令序列  

     + **数据**是使程序能够适当地处理信息的数据结构

     + **文档**是开发、使用和维护程序所需要的图文资料

  2. 开发和使用更好的软件工具  
    使用适当的软件工具来辅助开发人员，让他们从繁重重复的工作中解脱出来

+ 组织管理措施
  1. 积极借鉴各种工程项目中积累的行之有效的管理方法  
     软件开发不是个体劳动，需要组织良好、管理严密、各类人员协同配合的工程项目

  2. 推广使用在实践中总结出来的软件开发的成功的技术和方法  

  3. 尽快消除计算机系统早起发展形成的错误概念和做法

## 软件的本质
### 定义  
  软件是：(1)指令的集合(程序); (2)数据结构; (3)软件描述信息(文档)  

### 特点  
  + 软件**是无形的、不可见的逻辑实体**  

  + 软件**是设计开发的**，不是生成制造的

  + 软件在**使用过程中没有磨损、老化**的问题  

  + 软件**是定制开发的**

  + 软件是**复杂**的

  + 软件的**开发成本高**

  + 软件**易于复制**

  + 软件**质量要求较高**

### 分类
**按照功能划分，可分为三类：**  
+ 系统软件
  + 最靠近硬件  

  + 其他软件一般都通过系统软件发挥作用  

  + 编译程序处理复杂但确定的信息结构，把高级语言编写的程序转换为可执行的，等价的低级语言程序  

  + 操作系统、驱动程序等处理不确定的数据，负责管理系统的各种资源，控制程序执行

+ 支撑软件
  + 支撑软件的开发、维护和运行

  + 中间价是现代支撑软件的代表

  + 软件开发环境，如：环境数据库、接口软件、工具组

+ 应用软件
  + 特定领域专用的软件

**按照应用领域，可分为七类：**
+ 系统软件

+ 应用软件

+ 工程/科学软件

+ 嵌入式软件

+ 产品线软件
  + 为多个不同用户的使用提供特定功能

  + 关注有限的、内部的市场/大众消费品市场

+ Web /移动 App
  + 以网络为中心

  + 安装在移动设备上

+ 人工智能软件
  + 利用非数值算法解决计算和直接分析无法解决的复杂问题

## 软件工程
### 定义
`[IEE93a]`软件工程是：(1)将系统化的、规范的、可量化的方法应用于软件的开发、运行和维护，即将工程化的方法应用于软件; (2)对(1)中所述的方法的研究。  

通俗来说：软件工程指导计算机软件开发和维护。采用工程概念、原理、技术和方法来开发和维护软件。将经过证明有效的管理技术、最好的技术方法结合运用起来，经济地开发出高质量的软件并进行维护。