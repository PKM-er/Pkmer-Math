---
tags:
  - markdown
  - 数学
  - 公式
  - 规则
urlink:
  - https://www.jianshu.com/p/e74eb43960a1
  - https://blog.csdn.net/m0_37167788/article/details/78603307
author:
  - DanielGavin
  - Cyletix
  - SituChengxiang
  - ArcherReilly
---
# 一、基本符号
## 行内与独行
1. 行内公式: 将公式插入到本行内, 符号: `$公式内容$`, 如: $xyz$、$0$、$0_{m \times n}$、$\emptyset$、$\boldsymbol{0}$、$\vec{0}$
2. 独行公式: 将公式插入到新的一行内, 并且居中, 符号: `$$公式内容$$`, 如: $$xyz$$
## 上标、下标与组合
1. 上标符号, 符号: `^`, 如: $x^4$
		1. 下标符号, 符号: `_`, 如: $x_1$
2. 组合符号, 符号: `{}`, 如: $^{16}_{8}O^ {2+}_{2}$


## 汉字、字体与格式
1. 汉字形式, 符号: `\mbox{}`, 如: $V_{\mbox{init}}$
2. 字体控制, 符号: `\displaystyle`, 如: $\displaystyle \frac{x+y}{y+z}$
3. 下划线符号, 符号: `\underline`, 如: $\underline{x+y}$
4. 标签, 符号`\tag{数字}`, 如: $\tag{11}$
5. 上大括号, 符号: `\overbrace{算式}`, 如: $\overbrace{a+b+c+d}^{2.0}$
6. 下大括号, 符号: `\underbrace{算式}`, 如: $a+\underbrace{b+c}_{1.0}+d$
7. 上位符号, 符号: `\stacrel{上位符号}{基位符号}`, 如: $\vec{x}\stackrel{\mathrm{def}}{=}{x_1,\dots,x_n}$
8. 自适应条件等号 $\xlongequal{L'H}$ `\xlongequal{L'H}`


## 占位符
1. 两个quad空格, 符号: `\qquad`, 如: $x \qquad y$
2. quad空格, 符号: `\quad`, 如: $x \quad y$
3. 大空格, 符号`\`, 如: $x \  y$
4. 中空格, 符号`\:`, 如: $x \: y$
5. 小空格, 符号`\,`, 如: $x \, y$
6. 没有空格, 符号\`\`, 如: $xy$
7. 紧贴, 符号`\!`, 如: $x \! y$

## 定界符与组合
1. 括号, 符号: `( ) \big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)`, 如: $( ) \big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)$
2. 中括号, 符号: `[]`, 如: $[x+y]$
3. 大括号, 符号: `\{ \}`, 如: ${x+y}$
4. 自适应括号, 符号: `\left \right`, 如: $\left(x\right)$, $\left(x^{y^ z}\right)$
5. 组合公式, 符号: `{上位公式 \choose 下位公式}`, 如: ${n+1 \choose k}={n \choose k}+{n \choose k-1}$
6. 组合公式, 符号: `{上位公式 \atop 下位公式}`, 如: $\sum_{k_0,k_1,\ldots>0 \atop k_0+k_1+\cdots=n}A_{k_0}A_{k_1}\cdots$
7. 连结大括号
$$ f(x)=\left\{
\begin{aligned}
x & =  \cos(t) \\
y & =  \sin(t) \\
z & =  \frac xy
\end{aligned}
\right.
$$
```
\left\{
\begin{aligned}
\\
\end{aligned}
\right.
```

$$\begin{cases}
a_1 = 1, a_2 = 0\\
a_1 = 0, a_2 = 1\\
\end{cases}$$
```
\begin{cases}
\\
\\
\end{cases}
```

8. 组合数
$$
\binom{n}{k}
$$
```
\binom{n}{k}
```
$$
\tbinom{n}{k}
$$
```
\tbinom{n}{k}
```
## 四则运算
 1. 加法运算, 符号: `+`, 如: $x+y=z$
 2. 减法运算, 符号: `-`, 如: $x-y=z$
 3. 加减运算, 符号: `\pm`, 如: $x \pm y=z$
 4. 减加运算, 符号: `\mp`, 如: $x \mp y=z$
 5. 乘法运算, 符号: `\times`, 如: $x \times y=z$
 6. 点乘运算, 符号: `\cdot`, 如: $x \cdot y=z$
 7. 星乘运算, 符号: `\ast`, 如: $x \ast y=z$
 8. 除法运算, 符号: `\div`, 如: $x \div y=z$
 9. 斜法运算, 符号: `/`, 如: $x/y=z$
10. 分式表示, 符号: `\frac{分子}{分母}`, 如: $\frac{x+y}{y+z}$
11. 分式表示, 符号: `{分子} \voer {分母}`, 如: ${x+y} \over {y+z}$
12. 绝对值表示, 符号: `||`, 如: $|x+y|$

## 高级运算
 1. 平均数运算, 符号: `\overline{算式}`, 如: $\overline{xyz}$
 2. 开二次方运算, 符号: `\sqrt`, 如: $\sqrt x$
 4. 开方运算, 符号: `\sqrt[开方数]{被开方数}`, 如: $\sqrt[3]{x+y}$
 5. 对数运算, 符号: `\log`, 如: $\log(x)$
 6. 极限运算, 符号: `\lim`, 如: $\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$
 7. 极限运算, 符号: `\displaystyle \lim`, 如: $\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$
 8. 求和运算, 符号: `\sum`, 如: $\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$
 9. 求和运算, 符号: `\prod`, 如: $\prod_{x \to 0}^{\infty}{\frac{x}{y}}$
 10. 积分运算, 符号: `\int`, 如: $\int^{\infty}_{0}{xdx}$ $\smallint$
	1.定积分:
	$$
	\int_{1}^{2}
	\intop_{2}^{1}
	\\
	$$
	2. 重积分:
	$$
	\iint
	\iiint
	$$
	3. 闭线积分:(Obsidian似乎需要额外的Latex符号包)
	$$
	\oint
	\oiint
	\oiiint
	$$
	4. 闭线积分:提供一种不需要额外符号包的方法, 参考[[闭曲面积分符号的表示方法]]
	$$\displaystyle\int\hspace{-0.95em}\bigcirc\hspace{-1em}\int$$
```
\displaystyle\int\hspace{-0.95em}\bigcirc\hspace{-1em}\int
```

 11. 微分运算, 符号: `\partial`, 如: $\frac{\partial x}{\partial y}$

| 符号            | Markdown    |
| ------------- | ----------- |
| $\mathrm{d}x$ | \mathrm{d}x |
| $\partial$    | \partial    |
| $\Delta$      | \Delta      |
| $\nabla$      | \nabla      |
| $\dot x$      | \dot        |
| $\ddot y$     | \ddot       |
12. 矩阵表示, 符号: `\begin{matrix} \end{matrix}`, 如: 
$$\left[ \begin{matrix} 1 &2 &\cdots &4 & 5 &6 &\cdots &8\\vdots &\vdots &\ddots &\vdots & 13 &14 &\cdots &16\end{matrix} \right]$$
13. 导数 `a'  a''  a^{\prime}`
$$
a'
a''
a^{\prime}
$$

## 逻辑运算

 1. 等于运算, 符号: ` = `, 如: $x+y=z$
 2. 大于运算, 符号: `>`, 如: $x+y>z$
 3. 小于运算, 符号: `<`, 如: $x+y<z$
 4. 大于等于运算, 符号: `\geq`, 如: $x+y \geq z$
 5. 小于等于运算, 符号: `\leq`, 如: $x+y \leq z$
 6. 不等于运算, 符号: `\neq`, 如: $x+y \neq z$
 7. 不大于等于运算, 符号: `\ngeq`, 如: $x+y \ngeq z$
 8. 不大于等于运算, 符号: `\not\geq`, 如: $x+y \not\geq z$
 9. 不小于等于运算, 符号: `\nleq`, 如: $x+y \nleq z$
10. 不小于等于运算, 符号: `\not\leq`, 如: $x+y \not\leq z$
11. 约等于运算, 符号: `\approx`, 如: $x+y \approx z$
12. 恒定等于运算, 符号: `\equiv`, 如: $x+y \equiv z$

## 集合运算

 1. 属于运算, 符号: `\in`, 如: $x \in y$
 2. 不属于运算, 符号: `\notin`, 如: $x \notin y$
 3. 不属于运算, 符号: `\not\in`, 如: $x \not\in y$
 4. 子集运算, 符号: `\subset`, 如: $x \subset y$
 5. 子集运算, 符号: `\supset`, 如: $x \supset y$
 6. 真子集运算, 符号: `\subseteq`, 如: $x \subseteq y$
 7. 非真子集运算, 符号: `\subsetneq`, 如: $x \subsetneq y$
 8. 真子集运算, 符号: `\supseteq`, 如: $x \supseteq y$
 9. 非真子集运算, 符号: `\supsetneq`, 如: $x \supsetneq y$
10. 非子集运算, 符号: `\not\subset`, 如: $x \not\subset y$
11. 非子集运算, 符号: `\not\supset`, 如: $x \not\supset y$
12. 并集运算, 符号: `\cup`, 如: $x \cup y$
13. 交集运算, 符号: `\cap`, 如: $x \cap y$
14. 差集运算, 符号: `\setminus`, 如: $x \setminus y$
15. 同或运算, 符号: `\bigodot`, 如: $x \bigodot y$
16. 同与运算, 符号: `\bigotimes`, 如: $x \bigotimes y$
17. 实数集合, 符号: `\mathbb{R}`, 如: `\mathbb{R}`
18. 自然数集合, 符号: `\mathbb{Z}`, 如: `\mathbb{Z}`
19. 空集, 符号: `\emptyset`, 如: $\emptyset$
20. 任意: `\forall` $\forall$
21. 存在: `\exists` $\exists$
22. $\land$ `\land`
23. $\vee$ `\vee`

## 数学符号

 1. 无穷, 符号: `\infty`, 如: $\infty$
 2. 虚数, 符号: `\imath`, 如: $\imath$
 3. 虚数, 符号: `\jmath`, 如: $\jmath$
 4. 数学符号, 符号`\hat{a}`, 如: $\hat{a}$
 5. 数学符号, 符号`\check{a}`, 如: $\check{a}$
 6. 数学符号, 符号`\breve{a}`, 如: $\breve{a}$
 7. 数学符号, 符号`\tilde{a}`, 如: $\tilde{a}$
 8. 数学符号, 符号`\bar{a}`, 如: $\bar{a}$
 9. 矢量符号, 符号`\vec{a}`, 如: $\vec{a}$
10. 数学符号, 符号`\acute{a}`, 如: $\acute{a}$
11. 数学符号, 符号`\grave{a}`, 如: $\grave{a}$
12. 数学符号, 符号`\mathring{a}`, 如: $\mathring{a}$
13. 一阶导数符号, 符号`\dot{a}`, 如: $\dot{a}$
14. 二阶导数符号, 符号`\ddot{a}`, 如: $\ddot{a}$
15. 上箭头, 符号: `\uparrow`, 如: $\uparrow$
16. 上箭头, 符号: `\Uparrow`, 如: $\Uparrow$
17. 下箭头, 符号: `\downarrow`, 如: $\downarrow$
18. 下箭头, 符号: `\Downarrow`, 如: $\Downarrow$
19. 左箭头, 符号: `\leftarrow`, 如: $\leftarrow$
20. 左箭头, 符号: `\Leftarrow`, 如: $\Leftarrow$
21. 右箭头, 符号: `\rightarrow`, 如: $\rightarrow$
22. 右箭头, 符号: `\Rightarrow`, 如: $\Rightarrow$
23. 底端对齐的省略号, 符号: `\ldots`, 如: $1,2,\ldots,n$
24. 中线对齐的省略号, 符号: `\cdots`, 如: $x_1^2 + x_2^2 + \cdots + x_n^2$
25. 竖直对齐的省略号, 符号: `\vdots`, 如: $\vdots$
26. 斜对齐的省略号, 符号: `\ddots`, 如: $\ddots$

## 取模
```
x \pmod a
2\mod{x}
```
$$
x \pmod a
2\mod{x}
$$

## 累积
$\sum_{i=1}^{k}$, $\displaystyle\sum_{i=1}^n$
$$\textstyle\sum_{i=1}^n$$

## 累乘
$$\prod_{i=1}^{k}$$
$$\displaystyle\prod_{i=1}^n$$
$$\textstyle\prod_{i=1}^n$$

## 极限
$$\lim_{k \to \infty}$$
$$\lim\limits_{k \to \infty}$$
$$\lim\nolimits_{k \to \infty}$$



## 希腊字母

| 字母  | 实现         | 字母  | 实现         |               |               |
| --- | ---------- | --- | ---------- | ------------- | ------------- |
| A   | `A`        | α   | `\alhpa`   |               |               |
| B   | `B`        | β   | `\beta`    |               |               |
| Γ   | `\Gamma`   | γ   | `\gamma`   |               |               |
| Δ   | `\Delta`   | δ   | `\delta`   |               |               |
| E   | `E`        | ϵ   | `\epsilon` | $\varepsilon$ | `\varepsilon` |
| Z   | `Z`        | ζ   | `\zeta`    |               |               |
| H   | `H`        | η   | `\eta`     |               |               |
| Θ   | `\Theta`   | θ   | `\theta`   | $\vartheta$   | `\vartheta`   |
| I   | `I`        | ι   | `\iota`    |               |               |
| K   | `K`        | κ   | `\kappa`   | $\varkappa$   | `\varkappa`   |
| Λ   | `\Lambda`  | λ   | `\lambda`  |               |               |
| M   | `M`        | μ   | `\mu`      |               |               |
| N   | `N`        | ν   | `\nu`      |               |               |
| Ξ   | `\Xi`      | ξ   | `\xi`      |               |               |
| O   | `O`        | ο   | `\omicron` |               |               |
| Π   | `\Pi`      | π   | `\pi`      | $\varpi$      | `\varpi`      |
| P   | `P`        | ρ   | `\rho`     | $\varrho$     | `\varrho`     |
| Σ   | `\Sigma`   | σ   | `\sigma`   | $\varsigma$   | `\varsigma`   |
| T   | `T`        | τ   | `\tau`     |               |               |
| Υ   | `\Upsilon` | υ   | `\upsilon` |               |               |
| Φ   | `\Phi`     | ϕ   | `\phi`     | $\varphi$     | `\varphi`     |
| X   | `X`        | χ   | `\chi`     |               |               |
| Ψ   | `\Psi`     | ψ   | `\psi`     |               |               |
| Ω   | `\v`       | ω   | `\omega`   |               |               |

## 修饰线

|   代码    |  功能  |
| :-----: | :--: |
| \uline  | 单下划线 |
| \uuline | 双下划线 |
| \uwave  | 波浪线  |
|  \sout  | 删除线  |
|  \xout  | 斜删除线 |

## 特殊字体

| sign          | syntax      |         | instruct<br>       |
| ------------- | ----------- | ------- | ------------------ |
| $L$           | L           | 原版      |                    |
| $\mathrm{L}$  | \mathrm{L}  | 正体      | 常数或变量              |
| $\mathbf{v}$  | \mathbf{v}  | 粗体      | 向量, 张量             |
| $\mathcal{L}$ | \mathcal{L} | 花体      | 拉普拉斯变换, 拉格朗日函数<br> |
| $\mathscr{L}$ | \mathscr{L} | 花体2     | 量子场论, 拉格朗日密度       |
| $\mathbb{R}$  | \mathbb{R}  | 双线体     | 实数域                |
| $\mathbb{C}$  | \mathbb{C}  | 双线体<br> | 复数域<br>            |


---
# 二、修饰符号

$A\underset{\text{下标条件}}{\overset{\text{上标条件}}{\sim}}B$
```
A\underset{\text{下标条件}}{\overset{\text{上标条件}}{\sim}}B
``` 

## 1\. 简单的帽子
$\hat{\theta}$ $\widehat{AB}$ 
```
\hat{\theta}
\widehat{AB}
```
$\bar{y}$ $\overline{AB}$ 
```
\bar{y}
\overline{AB}
```
$\tilde{a}$ $\widetilde{ac}$ 
```
\tilde{a}
\widetilde{ac}
```
$\bar{a}$ $\acute{a}$ $\check{a}$ $\grave{a}$ 
```
\bar{a}
\acute{a}
\check{a}
\grave{a}
```
$\dot{a}$ $\ddot{a}$ 
```
\dot{a}
\ddot{a}
```


## 2\. 帽子和袜子
$\overleftarrow{AB}$  
$\overrightarrow{AB}$ 
$\overleftrightarrow{AB}$ 
```
\overleftarrow{AB}
\overrightarrow{AB}
\overleftrightarrow{AB}
```
$\underleftarrow{AB}$
$\underrightarrow{AB}$
$\underleftrightarrow{AB}$
```
\underleftarrow{AB}
\underrightarrow{AB}
\underleftrightarrow{AB}
```
$\overbrace{AB}$
$\underbrace{AB}$
```
\overbrace{AB}
\underbrace{AB}
```
$\overline{AB}$
$\underline{AB}$
```
\overline{AB}
\underline{AB}
```

## 3\. 盒子和帽子

$\overbrace{a+b+c}^{\text{note}}$ 

$\underbrace{a+b+c}_{\text{note}}$

$\boxed{\pi=3.14}$ 

```
\overbrace{a+b+c}^{\text{note}}
\\
\underbrace{a+b+c}_{\text{note}}
\\
\boxed{\pi=3.14}
```

## 4\. 各种括号

> [!note]+ 小括号
>```md
>()
>```
>```md
>\big(\big)
>```
>```md
>\Big(\Big)
>```
>```md
>\bigg(\bigg)
>```
>```md
>\Bigg(\Bigg)
>```


> [!note] 自适应括号
>```md
>\left \right
>```

> [!note]+ 大括号
>
>```md
>\{ \}
>```
>```md
>\big{\big}
>```
>```md
>\Big{\Big}
>```
>```md
>\bigg{\bigg}
>```
>```md
>\Bigg{\Bigg}
>```

$$\big( \Big( \bigg( \Bigg($$

```
$$
(
\big(
\Big(
\bigg(
\Bigg(
$$
```

| 符号                    | Markdown                 |
| --------------------- | ------------------------ |
| $[]$                  |                          |
| $<>$                  |                          |
| $\{\}$                |                          |
| $\lvert \rvert$       | `\lvert` `\rvert`        |
| $\lVert \rVert$       | `\lVert`  `\rVert`       |
| $\lgroup x \rgroup$   | `\lgroup` `\rgroup`      |
| $\lceil 2.6 \rceil$   | `\lceil` 2.6 `\rceil`    |
| $\lfloor 1.2 \rfloor$ | `\lfloor` 1.2 `\rfloor`  |
| $\ulcorner \urcorner$ | `\ulcorner`  `\urcorner` |
| $\llcorner \lrcorner$ | `\llcorner`  `\lrcorner` |

## 矩阵分割线
水平分割线
$$
\begin{matrix}
1 & 2 & 3 \\
\hline
4 & 5 & 6 \\
\hline
7 & 8 & 9 \\
\end{matrix}
$$
垂直分割线
$$
\left(\begin{array}{c|c|c}
1 & 2 & 3 \\
\hline
4 & 5 & 6 \\
\hline
7 & 8 & 9 \\
\end{array}\right)
$$

---
# 三、箭头
### 箭头符号
| 符号  | Markdown        |
| --- | --------------- |
| ↑   | \uparrow        |
| ⇑   | \Uparrow        |
| ↓   | \downarrow      |
| ⇓   | \Downarrow      |
| ←   | \leftarrow      |
| ⇐   | \Leftarrow      |
| →   | \rightarrow     |
| ⇒   | \Rightarrow     |
| ↕   | \updownarrow    |
| ⇕   | \Updownarrow    |
| ↔   | \leftrightarrow |
| ⇔   | \Leftrightarrow |
### 长箭头表示
| 符号 | MarkDown |
| ---- | ---- |
| ⟵ | \longleftarrow |
| ⟸ | \Longleftarrow |
| ⟶ | \longrightarrow |
| ⟹ | \Longrightarrow |
| ⟷ | \longleftrightarrow |
| ⟺ | \Longleftrightarrow |
### 更多的箭头符号
| 符号  | MarkDown             |
| --- | -------------------- |
| ↠   | \twoheadrightarrow   |
| ↣   | \rightarrowtail      |
| ↬   | \looparrowright      |
| ↷   | \curvearrowright     |
| ↻   | \circlearrowright    |
| ↱   | \Rsh                 |
| ⊸   | \multimap            |
| ↭   | \leftrightsquigarrow |
| ⇝   | \rightsquigarrow     |
| ⇝   | \leadsto             |
| ↗   | \nearrow             |
| ↘   | \searrow             |
| ↙   | \swarrow             |
| ↖   | \nwarrow             |
| ↚   | \nleftarrow          |
| ↛   | \nrightarrow         |
| ⇍   | \nLeftarrow          |
| ⇏   | \nRightarrow         |
| ↮   | \nleftrightarrow     |
| ⇎   | \nLeftrightarrow     |
| ⇢   | \dashrightarrow      |
| ⇠   | \dashleftarrow       |
| ⇇   | \leftleftarrows      |
| ⇆   | \leftrightarrows     |
| ⇚   | \Lleftarrow          |
| ↞   | \twoheadleftarrow    |
| ↢   | \leftarrowtail       |
| ↫   | \looparrowleft       |
| ↶   | \curvearrowleft      |
| ↺   | \circlearrowleft     |
| ↰   | \Lsh                 |
| ↦   | \mapsto              |
| ↩   | \hookleftarrow       |
| ↪   | \hookrightarrow      |
| ↾   | \upharpoonright      |
| ↿   | \upharpoonleft       |
| ⇂   | \downharpoonright    |
| ⇃   | \downharpoonleft     |
| ↼   | \leftharpoonup       |
| ⇀   | \rightharpoonup      |
| ↽   | \leftharpoondown     |
| ⇁   | \rightharpoondown    |
| ⇈   | \upuparrows          |
| ⇊   | \downdownarrows      |
| ⇉   | \rightrightarrows    |
| ⇄   | \rightleftarrows     |
| ⇉   | \rightrightarrows    |
| ⇄   | \rightleftarrows     |
| ⇌   | \rightleftharpoons   |
| ⇋   | \leftrightharpoons   |



---
# 四、ArcherReilly

### Greek Letters
|Symbol|Script|
|---|---|
|$\alpha$|`\alpha`|
|$A$|`A`|
|$\beta$|`\beta`|
|$B$|`B`|
|$\gamma$|`\gammma`|
|$\Gamma$|`\Gamma`|
|$\pi$|`\pi`|
|$\Pi$|`\Pi`|
|$\phi$|`\phi`|
|$\Phi$|`\Phi`|
|$\varphi$|`\varphi`|
|$\theta$|`\theta`|

### Operators
|Symbol|Script|
|---|---|
|$\cos$|`\cos`|
|$\sin$|`\sin`|
|$\lim$|`\lim`|
|$\exp$|`\exp`|
|$\to$|`\to`|
|$\infty$|`\infty`|
|$\equiv$|`\equiv`|
|$\bmod$|`\bmod`|
|$\times$|`\times`|

### Power and Indices
|Symbol|Script|
|---|---|
|$k_{n+1}$|`k_{n+1}`|
|$n^2$|`n^2`|
|$k_n^2$|`k_n^2`|

### Fractions and Binomials
|Symbol|Script|
|---|---|
|$\frac{n!}{k!(n-k)!}$|`\frac{n!}{k!(n-k)!}`|
|$\binom{n}{k}$|`\binom{n}{k}`|
|$\frac{\frac{x}{1}}{x - y}$|`\frac{\frac{x}{1}}{x - y}`|
|$^3/_7$|`^3/_7`|

### Roots
|Symbol|Script|
|---|---|
|$\sqrt{k}$|`\sqrt{k}`|
|$\sqrt[n]{k}$|`\sqrt[n]{k}`|

### Sums and Integrals
| Symbol                                      | Script                                    |
| ------------------------------------------- | ----------------------------------------- |
| $\sum_{i=1}^{10} t_i$                       | \sum_{i=1}^{10} t_i                       |
| $\int_0^\infty \mathrm{e}^{-x},\mathrm{d}x$ | \int_0^\infty \mathrm{e}^{-x},\mathrm{d}x |
| $\sum$                                      | \sum                                      |
| $\prod$                                     | \prod                                     |
| $\coprod$                                   | \coprod                                   |
| $\bigoplus$                                 | \bigoplus                                 |
| $\bigotimes$                                | \bigotimes                                |
| $\bigodot$                                  | \bigodot                                  |
| $\bigcup$                                   | \bigcup                                   |
| $\bigcap$                                   | \bigcap                                   |
| $\biguplus$                                 | \biguplus                                 |
| $\bigsqcup$                                 | \bigsqcup                                 |
| $\bigvee$                                   | \bigvee                                   |
| $\bigwedge$                                 | \bigwedge                                 |
| $\int$                                      | \int                                      |
| $\oint$                                     | \oint                                     |
| $\iint$                                     | \iint                                     |
| $\iiint$                                    | \iiint                                    |
| $\idotsint$                                 | \idotsint                                 |
| $$\sum_{\substack{0<i<m\0<j<n}} P(i, j)$$   | \sum_{\substack{0<i<m\0<j<n}} P(i, j)     |
| $\int\limits_a^b$                           | \int\limits_a^b                           |

| Symbol                | Script              |
| --------------------- | ------------------- |
| $a'$ $a^{\prime}$     | a` a^{\prime}       |
| $a''$                 | a''                 |
| $\hat{a}$             | hat{a}              |
| $\bar{a}$             | \bar{a}             |
| $\grave{a}$           | \grave{a}           |
| $\acute{a}$           | \acute{a}           |
| $\dot{a}$             | \dot{a}             |
| $\ddot{a}$            | \ddot{a}            |
| $\not{a}$             | \not{a}             |
| $\mathring{a}$        | \mathring{a}        |
| $\overrightarrow{AB}$ | \overrightarrow{AB} |
| $\overleftarrow{AB}$  | \overleftarrow{AB}  |
| $a'''$                | a'''                |
| $\overline{aaa}$      | \overline{aaa}      |
| $\check{a}$           | \check{a}           |
| $\vec{a}$             | \vec{a}             |
| $\underline{a}$       | \underline{a}       |
| $\color{red}x$        | \color{red}x        |
| $\pm$                 | \pm                 |
| $\mp$                 | \mp                 |
| $\int y \mathrm{d}x$  | \int y \mathrm{d}x  |
| $,$                   | ,                   |
| $:$                   | :                   |
| $;$                   | ;                   |
| $!$                   | !                   |
| $\int y, \mathrm{d}x$ | \int y, \mathrm{d}x |
| $\dots$               | \dots               |
| $\ldots$              | \ldots              |
| $\cdots$              | \cdots              |
| $\vdots$              | \vdots              |
| $\ddots$              | \ddots              |

### Brackets etc
|Symbol|Script|
|---|---|
|$(a)$|(a)|
|$[a]$|[a]|
|${a}$|{a}|
|$\langle f \rangle$|\langle f \rangle|
|$\lfloor f \rfloor$|\lfloor f \rfloor|
|$\lceil f \rceil$|\lceil f \rceil|
|$\ulcorner f \urcorner$|\ulcorner f \urcorner|
