---
tags:
  - 数学
dlink:
  - "[[--加密学中的数论--]]"
  - "[[大数分解]]"
  - "[[欧拉函数]]"
aliases:
  - RSA
  - RSA cryptosystem
  - 公钥加密
author:
  - DeepSeekV4Flash
---

RSA 是第一个实用的公钥密码体制（Rivest–Shamir–Adleman，1977）：公钥公开用于加密，私钥秘密用于解密，解决了对称密码的密钥分发难题。它的安全性建立在[[大数分解]]的困难性上，是 TLS、数字签名等现代安全协议的基础。

## 密钥生成
1. 选两个大素数 $p,q$，计算 $n=pq$ 与 $\varphi(n)=(p-1)(q-1)$
2. 选加密指数 $e$ 满足 $\gcd(e,\varphi(n))=1$
3. 计算解密指数 $d\equiv e^{-1}\pmod{\varphi(n)}$（由[[最大公因数|Bezout 定理]]保证存在）
4. 公钥 $(n,e)$，私钥 $d$；$p,q$ 须销毁

## 加密与解密
明文 $m$（$0\le m<n$）：
$$c\equiv m^e\pmod n,\qquad m\equiv c^d\pmod n$$
正确性由[[欧拉函数|欧拉定理]]保证：$m^{\varphi(n)}\equiv1\pmod n$，于是
$$c^d\equiv m^{ed}=m^{1+k\varphi(n)}\equiv m\pmod n$$

## 安全性
- 若能分解 $n$ 求出 $p,q$，即可算出 $\varphi(n)$ 并恢复 $d$；目前没有已知的经典多项式分解算法（见[[大数分解]]）
- 密钥长度建议 2048 位以上；小指数需配合填充（如 OAEP）抵御低指数攻击

## 示例
取 $p=61$，$q=53$：$n=3233$，$\varphi(n)=3120$，$e=17$，$d\equiv17^{-1}\equiv2753\pmod{3120}$。加密 $m=65$：
$$c\equiv65^{17}\equiv2790\pmod{3233}$$
解密 $2790^{2753}\equiv65\pmod{3233}$，还原明文。

## 应用
RSA 用于密钥交换（TLS）与[[数字签名]]；解密可用[[中国剩余定理的密码学应用|CRT 加速]]至约 4 倍速度，模幂运算由[[快速幂]]实现。
