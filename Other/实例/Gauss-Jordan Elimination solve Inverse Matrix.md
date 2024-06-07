---
tags:
  - 数学
dlink:
  - "[[--线性代数--]]"
---
To find the inverse of the matrix $A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ using Gauss-Jordan elimination, we can follow these steps:

1. **Form the augmented matrix** by appending the identity matrix to $A$:
   $$
   \left( \begin{array}{cc|cc}
   1 & 1 & 1 & 0 \\
   1 & -1 & 0 & 1 \\
   \end{array} \right)
   $$

2. **Apply row operations to transform the left part of the augmented matrix into the identity matrix.**

   - **Step 1:** Subtract the first row from the second row:
     $$
     R_2 \leftarrow R_2 - R_1
     $$
     This gives:
     $$
     \left( \begin{array}{cc|cc}
     1 & 1 & 1 & 0 \\
     0 & -2 & -1 & 1 \\
     \end{array} \right)
     $$

   - **Step 2:** Divide the second row by $-2$:
     $$
     R_2 \leftarrow \frac{R_2}{-2}
     $$
     This gives:
     $$
     \left( \begin{array}{cc|cc}
     1 & 1 & 1 & 0 \\
     0 & 1 & \frac{1}{2} & -\frac{1}{2} \\
     \end{array} \right)
     $$

   - **Step 3:** Subtract the second row from the first row:
     $$
     R_1 \leftarrow R_1 - R_2
     $$
     This gives:
     $$
     \left( \begin{array}{cc|cc}
     1 & 0 & \frac{1}{2} & \frac{1}{2} \\
     0 & 1 & \frac{1}{2} & -\frac{1}{2} \\
     \end{array} \right)
     $$

The left part of the augmented matrix is now the identity matrix, and the right part is the inverse of $A$.

Therefore, the inverse matrix $A^{-1}$ is:
$$
A^{-1} = \begin{pmatrix}
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & -\frac{1}{2}
\end{pmatrix}
$$

Thus, the inverse of the matrix $A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ is $\begin{pmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} \end{pmatrix}$.