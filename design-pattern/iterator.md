# 迭代器模式

将for循环变量i的作用抽象化、通用话后形成的模式，在设计模式中成为 `Iterator`模式。`Iterator`模式用于在数据集合中按照顺序遍历集合，英语单词 `Iterate`有反复做某件事情的意思，汉语称为**迭代器**。

:::: code-group

<<< @/design-pattern/code/iterator/main.js#snippet{js:line-numbers}[Main]

<<< @/design-pattern/code/iterator/BookShelf.js#snippet{js:line-numbers}[BookShelf]

<<< @/design-pattern/code/iterator/BookShelfIterator.js#snippet{js:line-numbers}[BookShelfIterator]

<<< @/design-pattern/code/iterator/Book.js#snippet{js:line-numbers}[Book]

::::

## 迭代器角色

### Iterator迭代器

该角色负责定义按顺序逐个遍历元素的接口，定义 `hasNext`和 `next`两个方法

### ConcreteIterator具体的迭代器

该角色负责实现 `Iterator`角色定义的接口, `BookshelfIterator`, 包含了遍历集合所必需的信息

### Aggreyate集合

该角色负责定义创建 `Iterator`角色的接口，这个接口是一个方法，会创建出“按顺序访问保存在内部元素的人"。

### ConcreteAggregate具体的集合

该角色负责实现 `Aggreyate`角色所定义的接口。它会创建出具体的 `Iterator`, 由 `BookShelf`扮演这个角色

## Iterator最后一个

next的方法名应该是 `returnCurrentElementAndAdvanceToNextPosition`

hasNext方法应该是“确认接下来是否可以调用next方法"

## 与其他设计模式的联系

### Visitor模式

Iterator模式是从集合中一个一个取出元素进行遍历，但是并没有在Iterator接口中声明对取出元素进行何种处理

Visitor模式则是在遍历元素集合的过程中，对元素进行相同的 处理

### Composite模式

Composite模式是具有递归结构的模式，在其中使用Iterator模式比较困难

### FactoryMethod模式

在Iterator方法中生成Iterator的实例时可能会使用FactoryMethod模式
