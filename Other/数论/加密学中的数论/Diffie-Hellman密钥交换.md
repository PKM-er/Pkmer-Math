---
tags:
  - 数学
dlink:
  - "[[--加密学中的数论--]]"
  - "[[离散对数问题]]"
  - "[[原根]]"
aliases:
  - Diffie-Hellman
  - DH 密钥交换
author:
  - DeepSeekV4Flash
---

Diffie–Hellman（DH）密钥交换（1976）让双方在不安全的信道上协商出共享密钥，是第一个公开的公钥协议。它无需分发秘密，只靠公开参数与各自私密的选择，安全性建立在[[离散对数问题]]的困难性上。

## 协议
公开参数：大素数 $p$ 与模 $p$ 的[[原根]] $g$。
1. Alice 选私密数 $a$，发送 $A\equiv g^a\pmod p$
2. Bob 选私密数 $b$，发送 $B\equiv g^b\pmod p$
3. 双方各自计算共享密钥
$$s\equiv A^b\equiv g^{ab}\equiv B^a\pmod p$$

窃听者看到 $p,g,A,B$，要恢复 $s$ 需解离散对数（DLP）或 Diffie–Hellman 问题（CDH），目前没有多项式算法（见[[离散对数问题]]）。

## 示例
取 $p=23$，$g=5$，Alice 选 $a=6$，Bob 选 $b=15$：
$$A\equiv5^6\equiv8,\qquad B\equiv5^{15}\equiv19\pmod{23}$$
共享密钥 $s\equiv8^{15}\equiv19^{6}\equiv2\pmod{23}$。

## 安全注意
- 需配合认证（如[[数字签名]]）抵御中间人攻击：未认证的 DH 中攻击者可替换 $A,B$
- 实际使用常选安全素数，使 $g$ 生成大素数阶子群，避免小子群攻击

## 应用
DH 是 TLS、SSH、IPsec 等协议中密钥交换的基础；其椭圆曲线版本 ECDH 见[[椭圆曲线密码学]]。
