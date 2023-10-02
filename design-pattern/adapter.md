# 适配器模式

:::info  加个**适配器**以便于复用

在程序世界中，经常会存在程序无法直接使用，需要做适当的变换才能使用的情况。这种用于填补“现有程序"和“所需程序"之间差异的设计模式就是Adapter模式。也被称为Wrapper模式。

:::

## 类适配器模式(使用继承的适配器)

:::: code-group

<<< @/design-pattern/code/adapter/extends.ts#snippet{js:line-numbers}[TS]

<<< @/design-pattern/code/adapter/extends.js#snippet{js:line-numbers}[JS]

<<< @/design-pattern/code/adapter/extends.d.ts#snippet{js:line-numbers}[DTS]

::::

`Print`扮演了"需求"的接口，`PrintBanner `类扮演了适配器的角色, 它继承了 `Banner` 类,实现了`Print`接口


## 对象适配器模式(使用委托的适配器)

:::: code-group

<<< @/design-pattern/code/adapter/delegate.ts#snippet{js:line-numbers}[TS]

<<< @/design-pattern/code/adapter/delegate.js#snippet{js:line-numbers}[JS]

<<< @/design-pattern/code/adapter/delegate.d.ts#snippet{js:line-numbers}[DTS]

::::

### Target 对象

该角色负责定义所需方法，Print接口(使用继承时)和Print类(使用委托时)扮演此角色

### Client 请求者

该角色负责使用Target角色所定义的方法进行具体处理。在此demo，调用程序扮演此类角色

### Adaptee 被适配

⚠️ 不是Adapt-er(适配)角色，而是Adapt-ee(被适配)角色

本示例由Banner类扮演此角色，如果Adaptee角色中的方法与Target方法相同，就不需要Adapter了

### Adapter 适配

Adapter模式的主人公，使用Adptee角色的方法来满足Target角色的需求，这是Adapter模式的目的，也是Adapter角色的作用，在本示例中，由PrintBanner类扮演这个角色

## 什么时候考虑使用Adapter模式？

很多时候我们并非从零开始编程，经常会用到现有的类。Adapter模式会对现有的类进行适配生成新的类。通过该模式可以很方便地创建我们需要的方法群。

::: tip

使用适配器模式可以在完全不改变现有代码的前提下使现有代码适配于新的接口。此外，在Adapter模式下，并非一定需要现成代码，只需要知道现有类的功能，就可以编写出新的类

:::
