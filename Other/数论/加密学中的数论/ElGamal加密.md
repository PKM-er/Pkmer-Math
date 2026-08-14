---
tags:
  - 数学
dlink:
  - "[[--加密学中的数论--]]"
  - "[[离散对数问题]]"
  - "[[原根]]"
aliases:
  - ElGamal
  - ElGamal cryptosystem
author:
  - DeepSeekV4Flash
---

ElGamal 加密（1985）把 Diffie–Hellman 思想扩展为公钥加密体制：离散对数作为单向陷门，随机数 $k$ 使同一明文每次加密得到不同密文。其安全性基于[[离散对数问题]]的困难性。

## 密钥生成
取大素数 $p$ 与[[原根]] $g$，选私钥 $x$，公钥 $y\equiv g^x\pmod p$。

## 加密与解密
加密明文 $m$：选随机数 $k$，输出
$$(c_1,c_2)\equiv(g^k,\ m\,y^k)\pmod p$$
解密：
$$m\equiv c_2\,c_1^{-x}\equiv m\,g^{xk}g^{-kx}\equiv m\pmod p$$

## 示例
取 $p=29$，$g=2$（$2$ 的阶为 $28$，是原根），私钥 $x=5$，公钥 $y=2^5\equiv3$。加密 $m=8$，选 $k=7$：
$$c_1\equiv2^7\equiv12,\qquad c_2\equiv8\cdot3^7\equiv9\pmod{29}$$
解密：$12^{-5}\equiv17\pmod{29}$，$m\equiv9\cdot17\equiv8\pmod{29}$。

## 特点
- **概率加密**：$k$ 每次不同则密文不同；$k$ 不得重复使用，否则可推出明文间关系
- 密文长度为明文的两倍；能解离散对数者可完全攻破（见[[离散对数问题]]）

## 应用
ElGamal 是 DSA 数字签名（见[[数字签名]]）与若干同态加密方案的基础，其椭圆曲线版本见[[椭圆曲线密码学]]。
