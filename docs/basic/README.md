# 音律基础

::: tip
Silver Music的音律不同于教科书上的音律，如有疑问和建议，请开[issue](https://github.com/SilverLeaves/SilverMusic/issues)。
:::

::: warning
Silver Music的音律不同于教科书上的音律，如有不适，敬请离开！
:::
## 泛音列

乐器频谱中所包含的频率，主要由乐器所产生的驻波以及驻波的附近频率的波决定。不同乐器的发声材质不一样，管乐是空气柱振动发声，弦乐是琴弦振动发声，鼓则是鼓面振动发声。
而在这些振动的材质上，只有驻波以及驻波的附近频率的波能产生较为稳定的振动，其他的波会很快耗散消失。后面默认为弦乐对应的计算方法。

基波对应的波节点仅出现在弦的两端，即整根上下振动着的弦长为半个波长。
$$f_0=\frac{v}{\lambda}=\frac{v}{2l}$$
在一根振动着的的弦上可能存在的驻波频率——泛音列是基频的整数倍。
$$f_n=nf_0$$
$$n\in{N^{+}}$$

音高在正常情况下由最低驻波以及驻波的附近频率的波中响度最大频率综合决定。**因为基波的振幅一般最大**，所以对于钢琴在$a_1$附近基本由基波频率决定，**在后文中，所有的音律都以基波为标准进行音高分析。**

## 音色

音色即为频谱上频率的振幅的时值(时(时间)、值(响度))分布抑或者简单来说是泛音列的时值(时(时间)、值(响度))分布。

简单来说，音色的相关要素为

* 频率分布
* 频率的振幅分布
* 不同频率振幅随时间的变化

泛音列附近频率的音波同样对音色有非常重要的作用，它们对音色起着完善和提高的作用，甚至主导音色听感。

## 听感

因为泛音列内存在倍频的关系，所以在倍频间的泛音列近似。
即每一个倍频的乐器音波听起来是相近的，低频乐器音波泛音列包含高频乐器音波泛音列。

例如基频440HZ的乐器音波和基频880HZ的乐器音波

* 基频440HZ的乐器音波泛音列：440、880、... ... 、n·440
* 基频880HZ的乐器音波泛音列：880、... ... 、n·880

由于同一种乐器的乐器音波的泛音列的响度具有近似的时间分布特征
所以每一个倍频的乐器音波听起来也是相近的

例如基频440HZ的$a_1$钢琴音波和基频880HZ的$a_2$钢琴音波

## 音律划分

将一个倍频区间作为一个音高区间，然后对音高区间进行划分得到音律。

$$f=a_1 2^{\frac{x}{n}}$$

$$x,n\in{N^{+}}$$

式中：

$f$为音高对应的频率，Hz；

$a_1$为标准音频率，目前国际标准$a_1$的频率为440Hz；

$n$为每音高内被划分出的音的个数，目前国际通行的n的个数为12，即12音律；

$x$为相对于$a_1$按键的位置，$x=0$得到$a_1$本身频率，$x=n$得到$a_2$频率。

## 唱名（音）与音律

唱名与音律的关系是相对的，不是绝对的，他们之间存在可以改变的映射关系，比如在转调的时候，它们之间的关系或者说映射就会相对改变。

## 拍

本质为音波的干涉，当两个频率的音叠加在一起的时候会产生拍,拍频为$f_2-f_1$。（证略）

## 琴键

这是一个音高区间的琴键示意，其从左到右对应的按键为：

| 黑键 | A#  | B#  | C#  | D#  | E#  | F#  | G#  | H#  |···|
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |---|

| 白键 | A   | B   | C   | D   | E   | F   | G   | H   |···| A   |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |---| --- |

**注意，这里所有主音之间的音程都为全音倍数**

## 音程

**注意，这里所有主音之间的音程都为全音倍数**

|音程/半音|称谓|示例（对于八音十六律）|
|---|---|---|
|0|零度|A-A|
|1|半度|A-A#|
|2|一度|A-B|
|3|一度半|A-B#|
|4|二度|A-C|
|5|二度半|A-C#|
|6|三度|A-D|
|7|三度半|A-D#|
|8|四度|A-E|
|9|四度半|A-E#|
|10|五度|A-F|
|11|五度半|A-F#|
|12|六度|A-A|


|音程/半音|称谓|示例（对于八音十六律）|
|---|---|---|
|0|零度|A-A|
|1|半度|A-A#|
|2|一度|A-B|
|3|一度半|A-B#|
|4|二度|A-C|
|5|二度半|A-C#|
|6|三度|A-D|
|7|三度半|A-D#|
|8|四度|A-E|
|9|四度半|A-E#|
|10|五度|A-F|
|11|五度半|A-F#|
|12|六度|A-G|
|13|六度半|A-G#|
|14|七度|A-H|
|15|七度半|A-H#|
|16|八度|A-A|

如上依次类推。

<br/>
<center class="footer">我们所弹奏的每个平凡的音符，也许就是连续演奏的奇迹。</center >