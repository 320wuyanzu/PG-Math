# 概念、定义

## 1、[导数与导函数]("")

设函数 $y=f(x)$ 在点 $x_0$ 的某个领域内有定义，当自变量 $x$ 在 $x_0$ 处取得增量 $\Delta x$（在点 $x_0+\Delta x$ 仍在该领域内）时，相应的函数取得增量 $\Delta y=f(x_0+\Delta x)-f(x_0)$；如果 $\Delta y$ 与 $\Delta x$ 之比当 $\Delta x \to 0$ 的极限存在，则称函数 $y=f(x)$ 在点 $x_0$ 处可导，并称这个极限为函数 $y=f(x)$ 在点 $x_0$ 处的导数，记为 $f'(x)$，即：
$$\Large f'(x)=\lim\limits_{\Delta x \to 0}\frac{\Delta y}{\Delta x}=\lim\limits_{\Delta x \to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim\limits_{h \to 0}\frac{f(x_0+h)-f(x_0)}{h}=\lim\limits_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0}$$

$f'(x_0)$ 的其他表达形式：

> - $$\Large y'\mid_{x=x_0}$$
>
> - $$\Large \frac{\mathrm{d}y}{\mathrm{d}x}\Bigg |_{x=x_0}$$
>
> - $$\Large \frac{\mathrm{d}f(x)}{\mathrm{d}x}\Bigg|_{x=x_0}$$

- **左导数**：$\Large f_-^{'}(x_0)=\lim\limits_{h \to 0^-}\LARGE \frac{f(x_0+h)-f(x_0)}{h}$

- **右导数**：$\Large f_+^{'}(x_0)=\lim\limits_{h \to 0^+}\LARGE \frac{f(x_0+h)-f(x_0)}{h}$

> $f(x)$ 在 $x_0$ 处可导 $\Longleftrightarrow$ 左右导数存在，且相等

- **导数的意义**

> - 它可以表达曲线的切线的斜率  
> - 它也表达的是某些物理量的瞬时值
> - 导数其实所表达的就是是函数在某点的的变化率

### A、可导与连续性的关系

$f(x)$ 在 $x_0$ 处可导 $\Longrightarrow$ $f(x)$ 在 $x_0$ 处连续
> 可导必连续，连续不一定可导

### B、反函数的导数

若函数 $x=f(y)$ 在区间 $I_y$ 内单调、可导且 $f'(y) \ne 0$，则它的反函数 $y=f^{-1}(x)$ 在区间 $I_x=\{x\mid x=f(y),y\in I_y\}$ 内也可导，且：
> $$\Large [f^{-1}(x)]'=\frac{1}{f'(y)}$$
> 也就是说 $\Large f' \centerdot (f^{-1})' = 1$

### C、复合函数的导数

如果 $u=g(x)$ 在点 $x$ 可导，而 $y=f(u)$ 在点 $u=g(x)$ 可导，则复合函数 $y=f[g(x)]$ 在点 $x$ 可导，且其导数为 $f'(u) \centerdot g'(x)$

### D、曲线的切线、法线

曲线 $y=f(x)$ 在点 $M(x_0, \;y_0)$ 处的：

- **切线方程**：$y-y_0=f'(x_0)(x-x_0)$

- **法线方程**：$y-y_0=-\Large\frac{1}{f'(x_0)}(x-x_0)$

### E、高阶导数

> 若两个函数都在 $x$ 处有 $n$ 阶导，则它们的和差积商都在 $x$ 处 $n$ 阶导

- $$\Large (f\pm g)^{(n)}=f^{(n)}\pm g^{(n)}$$

- $$(f\centerdot g)^{(n)}=\LARGE \sum_{\mathclap{k=0}}^n C_n^k \;\normalsize f^{(n-k)}g^{(k)}$$

## 2、[微分]("")

设函数 $y=f(x)$ 在某区间内有定义，$x_0$ 及 $x_0+\Delta x$ 在这区间内

> 如果函数的增量 $\Delta y = f(x_0+\Delta x)-f(x_0)$ 可以表示为 $\Delta y= A\Delta x +o(\Delta x)$，  
> 其中：$A$ 是不依赖于 $\Delta x$ 的常数，  
> 那么，称函数 $y=f(x)$ 在点 $x_0$ 是可微的，  
> 而 $A\Delta x$ 叫做函数 $y=f(x)$ 在点 $x_0$ 相应于自变量增量 $\Delta x$ 的微分，记作 $\mathrm{d}y$，即 $\mathrm{d}y=A\Delta x$

函数的微分记作：$\mathrm{d}y=f'(x)\mathrm{d}x$，即可得到 $\Large\frac{\mathrm{d}y}{\mathrm{d}x}=f'(x)$

微分公式可以参考导数公式，因为 $\mathrm{d}[f(x)]=f'(x)\mathrm{d}x$

### A、可微与可导的关系

若在点 $x_0$ 处，函数可微必可导，可导必可微

### B、微分形式的不变性

可以用来求复合函数的微分，例如 $y=\sin(2x+1)$：

$\mathrm{d}y=\mathrm{d}[\sin(2x+1)]=\cos(2x+1)\mathrm{d}(2x+1)=2\cos(2x+1)\mathrm{d}x$

## 3、[罗尔中值定理]("")

### A、费马引理

设函数 $f(x)$ 在点 $x_0$ 的某邻域 $U(x_0)$ 内有定义，并且在 $x_0$ 处可导，如果对任意的 $x\in U(x_0)$，有 $f(x)\leqslant f(x_0)$ 或 $f(x) \geqslant f(x_0)$，那么 $f'(x_0)=0$

导数等于零的称为函数的驻点或稳定点、临界点

### B、罗尔定理

如果函数 $f(x)$ 满足：

- 在 $[a,\;b]$ 上连续
- 在 $(a,\;b)$ 内可导
- $f(a)=f(b)$

那么在 $(a,\;b)$ 内至少有一点 $\xi$（a<$\xi<b$），使得 $f(\xi)=0$

## 4、拉格朗日中值定理

如果函数 $f(x)$ 满足：

- 在 $[a,\;b]$ 上连续
- 在 $(a,\;b)$ 内可导
- $f(a)=f(b)$

那么在 $(a,\;b)$ 内至少有一点 $\xi$（a<$\xi<b$），使得 $f(b)-f(a)=f'(\xi)(b-a)$

> 如果函数在某区间上的导数恒为零，那么函数在这个区间上是一个常数。

## 5、泰勒中值定理（泰勒公式）

> 泰勒中值定理是拉格朗日中值定理的推广

如果函数 $f(x)$ 在含有 $x_0$ 的某个开区间 $(a,\;b)$ 内具有直到 $(n+1)$ 阶的导数，则对任意 $x\in(a,\;b)$，有：

$\LARGE f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+...+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_n(x)$

其中 $\LARGE R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$，$\xi$ 介于 $x$ 和 $x_0$ 之间55

## 6、柯西中值定理

如果函数 $f(x)$，$F(x)$ 满足：

- 在 $[a,\;b]$ 上连续
- 在 $(a,\;b)$ 内可导
- 对任意 $x\in(a,\;b)$，$F'(x) \neq 0$

那么在 $(a,\;b)$ 内至少有一点 $\xi$（a<$\xi<b$），使得 $\LARGE\frac{f(b)-f(a)}{F(b)-F(a)}=\frac{f'(\xi)}{F'(\xi)}$

## 7、洛必达定理（洛必达法则）

设：

- 当 $x\to a$ 时，函数 $f(x)$ 及 $F(x)$ 都趋于零
- 在点 $a$ 的去心邻域内，$f'(x)$ 及 $F'(x)$ 都存在，且 $F'(x)\neq0$
- $\LARGE\lim\limits_{x \to a}\frac{f'(x)}{F'(x)}$ 存在或无穷大

那么，$\LARGE\lim\limits_{x \to a}\frac{f(x)}{F(x)} =\LARGE\lim\limits_{x \to a}\frac{f'(x)}{F'(x)}$

设：

- 当 $x \to \infty$ 时，函数 $f(x)$ 及 $F(x)$ 都趋于零
- 当 $\mid x \mid > N$ 时， $f'(x)$ 与 $F'(x)$ 都存在，且 $F'(x)\neq 0$
- $\LARGE\lim\limits_{x \to \infty}\frac{f'(x)}{F'(x)}$ 存在或无穷大

那么，$\LARGE\lim\limits_{x \to \infty}\frac{f(x)}{F(x)} =\LARGE\lim\limits_{x \to \infty}\frac{f'(x)}{F'(x)}$

## 8、曲线的凹凸性与拐点

- $f'(x) > 0$，单增

- $f'(x) < 0$，单减

- 凹：$\LARGE f(\frac{x_1+x_2}{2})<\frac{f(x_1)+f(x_2)}{2}$

- 凸：$\LARGE f(\frac{x_1+x_2}{2})>\frac{f(x_1)+f(x_2)}{2}$

- 凹：$f''(x) > 0$

- 凸：$f''(x) < 0$

- 拐点：曲线的凹凸性改变的地方

## 9、求函数的极值、最值

- 如果 $f(x)$ 在 $x_0$ 处可导，且在 $x_0$ 处取得极值，那么 $f'(x_0)=0$
> 可导函数的极值点必定是它的驻点

## 10、弧微分

## 11、曲率