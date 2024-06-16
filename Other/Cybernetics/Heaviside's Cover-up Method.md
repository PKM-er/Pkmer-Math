---
tags:
  - 数学
dlink: []
---
# Heaviside Cover-up Method

The **Heaviside cover-up method**, named after Oliver Heaviside is a technique for quickly determining the coefficients when performing the partial-fraction expansion of a rational function in cases of linear factors.

## Method

The separation of a fractional algebraic expression into partial fractions reverses the process of combining fractions by converting each to the lowest common denominator (LCD) and adding the numerators. This separation can be accomplished by the Heaviside cover-up method, which is another method for determining the coefficients of a partial fraction. Case one involves fractional expressions where factors in the denominator are unique, while case two involves expressions where some factors may repeat as powers of a binomial.

In integral calculus, this method is used to write a fractional algebraic expression as the sum of its partial fractions to facilitate the integration of each simple fraction separately. Once the original denominator, $D_0$, is factored, a fraction for each factor in the denominator is set up. Subscripted $D$ represents the denominator of the respective partial fractions, which are the factors in $D_0$. Letters $A, B, C, D, E,$ etc., represent the numerators of the respective partial fractions. When a partial fraction term has a single (i.e., unrepeated) binomial in the denominator, the numerator is a residue of the function defined by the input fraction.

Numerators are calculated by taking the root of the denominator (i.e., the value of $x$ that makes the denominator zero) and then substituting this root into the original expression but ignoring the corresponding factor in the denominator.

### Example

For the equation $\frac{3x^2 + 12x + 11}{(x+1)(x+2)(x+3)}$, set up a partial fraction for each factor in the denominator and apply the cover-up rule to solve for $A$, $B$, and $C$:

1. $D_1$ is $x + 1$; set it equal to zero, giving the residue for $A$ when $x = -1$.
2. Substitute this value of $x$ into the fractional expression without $D_1$ and calculate the value for $A$.
3. Proceed similarly for $B$ and $C$.

The values obtained will be:
$$
\frac{3x^2 + 12x + 11}{(x+2)(x+3)} = 1 = A, \quad \frac{3x^2 + 12x + 11}{(x+1)(x+3)} = +1 = B, \quad \frac{3x^2 + 12x + 11}{(x+1)(x+2)} = +1 = C.
$$

### General Formula for a Cubic Denominator with Three Distinct Roots

For a cubic denominator like $\frac{\ell x^2 + mx + n}{(x-a)(x-b)(x-c)}$, the expansion is given by:
$$
\frac{\ell x^2 + mx + n}{(x-a)(x-b)(x-c)} = \frac{A}{(x-a)} + \frac{B}{(x-b)} + \frac{C}{(x-c)},
$$
where
$$
A = \frac{\ell a^2 + ma + n}{(a-b)(a-c)}, \quad B = \frac{\ell b^2 + mb + n}{(b-c)(b-a)}, \quad C = \frac{\ell c^2 + mc + n}{(c-a)(c-b)}.
$$

## Case Two: Factors with Powers

When factors of the denominator include powers of one expression, set up a partial fraction for each unique factor and each lower power of $D$. An equation showing the relation of the numerators is established, and from this, each numerator, $A, B, C, D,$ etc., is solved. This equation is an absolute identity, true for all values of $x$. Any value of $x$ can be selected to solve for the numerators.

### Example

For the equation $\frac{3x + 5}{(1-2x)^2}$:
$$
\frac{3x + 5}{(1-2x)^2} = \frac{A}{(1-2x)^2} + \frac{B}{1-2x},
$$
set up a partial fraction for each descending power of the denominator and solve for the numerators $A$ and $B$. The cover-up rule can be applied, but additional relations are needed due to the repeated factors.

## References

1. Calculus and Analytic Geometry, 7th Edition, Thomas/Finney, 1988, pp. 482-489
2. Zill, Dennis G.; Wright, Warren S. (2013). Chapter 7: The Laplace Transform. Differential Equations with Boundary-Value Problems (8th ed.). Brooks/Cole Cengage Learning. pp. 287–88. ISBN 978-1-111-82706-9.
3. Thomas, George B.; Weir, Maurice D.; Hass, Joel (2010). Chapter 8: Techniques of Integration. Thomas's Calculus: Early Transcendentals (12th ed.). Addison-Wesley. pp. 476–78. ISBN 978-0-321-58876-0.
4. Wiener, Joseph; Watkins, Will (Fall 1993 – Spring 1994). "Calculus to Algebra in Connection to Partial Fraction Decomposition". The AMATYC Review. 15 (1–2): 28–30.



---
# 海维赛遮盖法 (Heaviside Cover-up Method)

**海维赛遮盖法**，以[奥利弗·海维赛德](https://en.wikipedia.org/wiki/Oliver_Heaviside)的名字命名，是一种在进行[有理函数](https://en.wikipedia.org/wiki/Rational_function)的[部分分数展开](https://en.wikipedia.org/wiki/Partial_fraction_expansion)时快速确定系数的技术，特别适用于线性因子的情况。

## 方法

将分数代数表达式分解为部分分数的过程，实际上是将多个分数通过转换为最小公共分母（LCD）并相加分子的过程倒转过来。这种分解可以通过海维赛遮盖法完成，这是确定部分分数系数的另一种方法。第一种情况涉及分母中因子唯一的分数表达式，而第二种情况涉及某些因子作为二项式的幂次重复出现。

在积分微积分中，我们会希望将分数代数表达式写成其部分分数的总和，以便分别对每个简单分数进行积分。一旦原始的分母$D_0$被因式分解，就会为分母中的每个因子设置一个分数。下标$D$表示相应部分分数的分母，这些分母是$D_0$中的因子。字母$A, B, C, D, E$等代表相应部分分数的分子。当部分分数项在分母中有一个单一（即未重复）的二项式时，分子是输入分数所定义的函数的[残差](https://en.wikipedia.org/wiki/Residue_(complex_analysis))。

通过取分母的根（即使分母为零的$x$的值）并将此根代入原始表达式但忽略相应的因子来计算各个分子。

### 示例

对于方程$\frac{3x^2 + 12x + 11}{(x+1)(x+2)(x+3)}$，为分母中的每个因子设置一个部分分数并应用遮盖法则来解算$A$、$B$和$C$：

1. $D_1$是$x + 1$；将其设为零，得到$x = -1$时$A$的残差。
2. 将此$x$值代入分数表达式中，但不包括$D_1$，并计算$A$的值。
3. 对$B$和$C$进行类似的处理。

得到的值将是：
$$
\frac{3x^2 + 12x + 11}{(x+2)(x+3)} = 1 = A, \quad \frac{3x^2 + 12x + 11}{(x+1)(x+3)} = +1 = B, \quad \frac{3x^2 + 12x + 11}{(x+1)(x+2)} = +1 = C.
$$

### 三次分母的通用公式和三个不同根

对于像$\frac{\ell x^2 + mx + n}{(x-a)(x-b)(x-c)}$这样的三次分母，展开式为：
$$
\frac{\ell x^2 + mx + n}{(x-a)(x-b)(x-c)} = \frac{A}{(x-a)} + \frac{B}{(x-b)} + \frac{C}{(x-c)},
$$
其中
$$
A = \frac{\ell a^2 + ma + n}{(a-b)(a-c)}, \quad B = \frac{\ell b^2 + mb + n}{(b-c)(b-a)}, \quad C = \frac{\ell c^2 + mc + n}{(c-a)(c-b)}.
$$

## 第二种情况：具有幂次的因子

当分母的因子包括一个表达式的幂次时，为每个唯一的因子和$D$的每个较低幂次设置一个部分分数。建立表示分子关系的方程，并从中解算每个分子$A, B, C, D$等。这个方程是一个绝对恒等式，对所有$x$的值都成立。可以选择任何$x$的值来解算分子。

### 示例

对于方程$\frac{3x + 5}{(1-2x)^2}$：
$$
\frac{3x + 5}{(1-2x)^2} = \frac{A}{(1-2x)^2} + \frac{B}{1-2x},
$$
为分母的每个下降幂次设置一个部分分数并求解分子$A$和$B$。可以应用遮盖法则，但由于重复因子，需要额外的关系式。

## 参考文献

1. Calculus and Analytic Geometry, 7th Edition, Thomas/Finney, 1988, pp. 482-489
2. Zill, Dennis G.; Wright, Warren S. (2013). 第7章：拉普拉斯变换. Differential Equations with Boundary-Value Problems (8th ed.). Brooks/Cole Cengage Learning. pp. 287–88. ISBN 978-1-111-82706-9.
3. Thomas, George B.; Weir, Maurice D.; Hass, Joel (2010). 第8章：积分技巧. Thomas's Calculus: Early Transcendentals (12th ed.). Addison-Wesley. pp. 476–78. ISBN 978-0-321-58876-0.
4. Wiener, Joseph; Watkins, Will (1993秋 – 1994春). "微积分与代数在部分分数分解中的联系". The AMATYC Review. 15 (1–2): 28–30.
