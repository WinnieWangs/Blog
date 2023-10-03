# Template Method 模式

## 将具体处理交给子类

Template Method模式是带有模板功能的模式 ，组成模板的方法被定义在父类中。由于这些方法是抽象方法，所以只查看父类的代码是无法知道这些方法最终会进行何种具体 处理的，唯一能知道的就是父类是如何调用这些方法的。


实现上述这些抽象方法的是子类。 在子类中实现了抽象方法也就决定了具体的处理。也就是说，只要在不同的子类中实现不同的具体处理， 当父类的模板方法被调用时程序行为也会不同。但是，不论子类中的具体实现如何，处理的流程都会按照父类中所定义的那样进行。 像这样在父类中定义处理流程的框架，在子类中实现具体处理的模式就称为Template Method模式。

:::: code-group

<<< @/design-pattern/code/template-method/template-method.ts#snippet{js:line-numbers}[TS]

<<< @/design-pattern/code/template-method/template-method.js#snippet{js:line-numbers}[JS]

<<< @/design-pattern/code/template-method/template-method.d.ts#snippet{js:line-numbers}[DTS]

::::

## TemplateMethod模式中的登场角色

### AbstractClass(抽象类)

AbstractClass 角色不仅负责实现模板方法，还负责声明在模板方法中所使用到的抽象方法。这些抽象方法由子类ConcreteClas角色负责实现。在示例程序中，由AbstractDisplay类扮演此角色。

### ConcreteClass (具体类)

该角色负责具体实现AbstractClass 角色中定义的抽象方法。这里实现的方法将会在AbstractClass角色的模板方法中被调用。在示例程序中，由 CharDisplay类和StringDisplay类扮演此角色

## 相关的设计模式

### Factory Method模式

FactoryMethod模式是将TemplateMethod模式用于生成实例的一个经典例子

### Strategy模式

在Template Method模式中，可以使用继承改变程序的行为，这是因为Template Method模式在父类中定义程序行为的框架，在子类中决定具体的处理。

与此相对的是Strategy模式，它可以使用委托改变程序的行为，与Template Method模式中改变部分程序行为不同的是，Strategy 模式用于替换整个算法。

## 抽象类的意义

由于在抽象方法中并没有编写具体的实现，所以我们无法知道在抽象方法中到底进行了什么样的处理，但是我们可以决定抽象方法的名宇，然后通过调用使用了抽象方法的模板方法去编写 处理。虽然具体的处理内容是由 子类决定的， 不过**在抽象类阶段确定处理的流程**非常重要。
