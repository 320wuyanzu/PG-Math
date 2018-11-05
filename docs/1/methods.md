# 结论、性质、定理

## 1、[有关数列极限、收敛性]()

- 极限唯一性：如果数列收敛，那么它的极限是唯一的
- 有界性：如果数列收敛，那么它有界（收敛必有界，有界不一定收敛）
- 保号性：如果数列收敛，那么总是可以从某项起，它与它的极限同号
  - 反推：如果收敛数列从某项起，符号不再改变，那么它的极限的正负就与这个符号相同
- 如果数列收敛于 $a$，那么它的任意子列也收敛于 $a$  
  - 推论：如果数列的某两个子列收敛于不同的极限，那么该数列发散

## 2、[有关函数极限、收敛性]()

- 唯一性：如果函数收敛，那么它的极限是唯一的
- 局部有界：如果函数在 $x_0$ 处收敛，那么在 $x_0$ 的某个邻域内，函数有界
- 局部保号：如果函数在 $x_0$ 处收敛，那么在 $x_0$ 的某个邻域内，函数值与极限同号
  - 反推：一定存在 $x_0$ 的某个邻域，有 $f(x)$ 与其极限同号
  - 推论：如果函数在 $x_0$ 处收敛于 $A$，一定存在 $x_0$ 的某个邻域，有 $\mid f(x)\mid \;> \frac{|A|}{2}$

## 3、[有关函数的连续性]()

- 若两个函数在 $x_0$ 处都连续，则它们的和差积商同样在 $x_0$ 处连续

- 原函数连续，则反函数也连续（注意它们两个的区间要对应）

- 基本初等函数在其**定义域内**都是连续的

- 一切初等函数在其**定义区间内**都是连续的

## 4、[有界性与最值定理]()

对于在区间 $I$ 上有定义的函数 $f(x)$，如果有 $x_0 \in I$，使得任意 $x \in I$ 都有：

- $f(x_0)$为最小值：$f(x) \geqslant f(x_0)$
- $f(x_0)$为最大值：$f(x) \leqslant f(x_0)$

> 若函数在某个闭区间上连续，则它在该区间上有界，且一定能取得它的两个最值

## 5、[零点定理]()

设函数 $f(x)$ 在闭区间 $[a, b]$ 上连续，且 $f(a)$ 与 $f(b)$ 异号（即 $f(a) \centerdot f(b) < 0$），则在开区间 $(a, b)$ 内至少有一点 $\xi$ 使 $f(\xi) = 0$

## 6、[介值定理]()

设函数 $f(x)$ 在闭区间 $[a, b]$ 上连续，且在这闭区间的端点取不同的值 $f(a) = A$ 和 $f(b) = B$，则对于 $A$ 与 $B$ 之间的任意一个数 $C$，在开区间 $(a, b)$ 内至少有一点 $\xi$ 使得 $f(\xi) = C (a < \xi < b)$

**推论**：

> 在闭区间 $[a, b]$ 上连续的函数 $f(x)$ 的值域在闭区间 $[m, M]$，其中 $m$ 与 $M$ 依次为 $f(x)$ 在 $[a,b]$ 上的最小值与最大值。

## 7、[一致连续性定理]()

设函数 $f(x)$ 在区间 $I$ 上有定义，如果对于任意给定的正数 $\epsilon$，总存在正数 $\delta$，使得对于区间 $I$ 上的任意两点 $x_1, x_2$，当 $|x_1-x_2|<\delta$ 时，有 $|f(x_1)-f(x_2)|<\epsilon$，那么就称 $f(x)$ 在区间 $I$ 上一致连续。

> 如果函数 $f(x)$ 在闭区间 $[a, b]$ 上连续，那么它在该区间上一致连续。

## 8、[无穷大、无穷小]()

- 在自变量的同一变化过程 $x \to x_0$（或 $x \to \infty$）中，

$$\Large \lim{f(x)} = A \Longleftrightarrow f(x) = A + \alpha$$
其中 $\alpha$ 是无穷小

- 在自变量的同一变化过程中，如果 $f(x)$ 为无穷大，那么 $\frac{1}{f(x)}$ 为无穷小，反之，如果 $f(x)$ 为无穷小，且 $f(x) \ne 0$，那么 $\frac{1}{f(x)}$ 为无穷大。

- $\Large \alpha \thicksim \beta \Longleftrightarrow \beta = \alpha + o(\alpha)$  

- 等价代换求极限：设 $\Large \alpha \thicksim \Alpha$，$\Large \beta \thicksim \Beta$，且 $\Large \lim{\frac{\Beta}{\Alpha}}$ 存在，则 $\Large \lim{\frac{\beta}{\alpha}} = \lim{\frac{\Beta}{\Alpha}}$

- 自反性：$\alpha \thicksim \alpha$

- 对称性：$\alpha \thicksim \beta \Longleftrightarrow \beta \thicksim \alpha$

- 传递性：$\alpha \thicksim \beta, \;\beta \thicksim \gamma$，则 $\alpha \thicksim \gamma$

## 9、[极限运算法则]()

- 有限个无穷小之和是无穷小

- 有界函数与无穷小的乘积是无穷小

- 常数与无穷小的乘积是无穷小

- 有限个无穷小的乘积是无穷小

- 如果 $\lim{f(x)} = A, \lim{g(x)} = B$，那么：

  - $\lim{[f(x) \pm g(x)]} = \lim{f(x)} \pm \lim{g(x)} = A \pm B$

  - $\lim{f(x) \centerdot g(x)} = \lim{f(x)} \centerdot \lim{g(x)} = A \centerdot B$

  - 若又有 $B \ne 0$，则 $\lim{\frac{f(x)}{g(x)}} = \frac{\lim{f(x)}}{\lim{g(x)}} = \frac{A}{B}$

- 如果 $\lim{f(x)}$ 存在，而 $c$ 为常数，那么 $\lim{[cf(x)]} = c\lim{f(x)}$

- 如果 $\lim{f(x)}$ 存在，而 $n$ 是正整数，那么 $\lim{[f(x)]^n} =[\lim{f(x)}]^n$

- 设有数列 $\{x_n\}$ 和 $\{y_n\}$, 如果 $\lim\limits_{n \to \infty}x_n = A, \lim\limits_{n \to \infty}y_n = B$, 那么:

  - $\lim\limits_{n \to \infty}(x_n \pm y_n) = A \pm B$
  - $\lim\limits_{n \to \infty}x_n \centerdot y_n = A \centerdot B$
  - $y_n \ne 0 (n = 1,2,...)$ 且 $B \ne 0$ 时, $\lim\limits_{n \to \infty}\frac{x_n}{y_n}=\frac{A}{B}$

- 如果 $\varphi (x) \geqslant \psi (x)$, 则 $\lim{\varphi (x)} \geqslant \lim{\psi (x)}$

- 设函数 $y=f[g(x)]$ 是由函数 $u=g(x)$ 与 $y=f(u)$ 复合而成, $f[g(x)]$ 在点 $x_0$ 的某去心邻域内有定义, 若 $\lim\limits_{x \to x_0}g(x) = u_0, \lim\limits_{u \to u_0}f(u)=A$, 且存在 $\delta_0 > 0$, 当 $x \in \mathring{U}(x_0, \delta_0)$ 时, 有 $g(x) \ne u_0$, 则 $\lim\limits_{x \to x_0}f[g(x)] = \lim\limits_{u \to u_0}f(u) = A$

## 10、[夹逼准则]()

> 如果数列 $\{x_n\}, \{y_n\}, \{z_n\}$ 满足下列条件:
>
> 1. 从某项起，即 $\exists\; n_0 \in N^+$，当 $n > n_0$ 时，有 $y_n \leqslant x_n \leqslant z_n$
> 2. $\lim\limits_{n \to \infty}y_n = a, \lim\limits_{n \to \infty}z_n = a$
>
> 那么数列 ${x_n}$ 的极限存在, 且 $\lim\limits_{n \to \infty}x_n = a$
>
推广到函数：
>
> 1. 当 $x \in \mathring{U}(x_0, r)$（或 $|x| > M$）时，$g(x) \leqslant f(x) \leqslant h(x)$
> 2. $\lim{g(x)} = A, \lim{h(x)} = A$
>
> 那么 $\lim{f(x)}$ 存在，且等于 $A$
>
> 利用夹逼准则证明重要极限 $\lim\limits_{x \to 0}\frac{\sin x}{x}=1$

## 11、[单调有界准则]()

> 单调有界数列必有极限  

> 如果数列 $\{x_n\}$ 满足条件 $x_1 \leqslant x_2 \leqslant x_3 \leqslant ... \leqslant x_n \leqslant x_{n+1} \leqslant ...$，就称数列 $\{x_n\}$ 是单调递增的  
如果数列 $\{x_n\}$ 满足条件 $x_1 \geqslant x_2 \geqslant x_3 \geqslant ... \geqslant x_n \geqslant x_{n+1} \geqslant ...$，就称数列 $\{x_n\}$ 是单调递减的  
如果数列既有界，又单调，那么这数列的极限必定存在，也就说这数列一定收敛。

推广到函数：

> 设函数 $f(x)$ 在点 $x_0$ 的某个左邻域内单调并且有界，则 $f(x)$ 在 $x_0$ 的左极限 $f(x_0^-)$ 必定存在。
>
> 利用单调有界准则证明重要极限 $\lim\limits_{z \to 0}(1+z)^{\frac{1}{z}} = \lim\limits_{x \to \infty}(1+\frac{1}{x})^x = e$

## 12、[柯西极限存在准则]()

> 又称柯西审敛原理
>
> 数列 $\{x_n\}$ 收敛 $\Longleftrightarrow$ 对于任意给定的正数 $\epsilon$，存在正整数 $N$，使得当 $m > N, n > N$ 时，有 $|x_n - x_m| < \epsilon$