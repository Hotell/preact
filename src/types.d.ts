type PropsType = object;
type StateType = object;

interface Document {
	createTextNode(data: string | number): Text

}
interface Node extends preactInternal.PreactElement {}
interface HTMLElement extends preactInternal.PreactElement{

}

interface SVGElement extends preactInternal.PreactElement {

}

declare type Component = preactInternal.Component
declare type VNode = preactInternal.VNode

declare namespace preactInternal {

  class PreactElement {
	//   splitText?: string
	splitText(offset: number): Text
	  normalizedNodeName: typeof Component|string
	  _component: Component
	  _componentConstructor?: typeof Component|string
	  _listeners?: object
  }
  class VNode {
	nodeName: typeof Component|string;
	attributes:{[name:string]:any};
	children:VNode[];
	key:string;
  }
  class Component {

	static defaultProps: object
    props: object;
    state: object;
    context: object;
    base: HTMLElement;
    nextProps: object;
    nextState: object;
    nextContext: object;
    nextBase: HTMLElement;
    prevProps: object;
    prevState: object;
    prevContext: object;
    _disable: boolean;
    _component?: Component & HTMLElement

	_parentComponent?: Component & HTMLElement
    _dirty: boolean;
	__key: string
	__ref(cb:Function|null): string

	_renderCallbacks: Function[] | null

    forceUpdate(callback?: () => void): void;

    setState(state: StateType, callback?: () => void): void;
    setState(
      fn: (prevState: StateType, props: PropsType) => StateType,
      callback?: () => void
    ): void;

    componentWillMount?(): void;
    componentDidMount?(): void;
    componentWillUnmount?(): void;
    componentWillReceiveProps?(nextProps: PropsType, nextContext: any): void;
    shouldComponentUpdate?(
      nextProps: PropsType,
      nextState: StateType,
      nextContext: any
    ): boolean;
    componentWillUpdate?(
      nextProps: PropsType,
      nextState: StateType,
      nextContext: any
    ): void;
    componentDidUpdate?(
      previousProps: PropsType,
      previousState: StateType,
      previousContext: any
    ): void;
    render(
      previousProps: PropsType,
      previousState: StateType,
      previousContext: any
    ): VNode;
    getChildContext(): object;
  }
}
