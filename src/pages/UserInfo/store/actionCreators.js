import { fromJS } from 'immutable'
import * as acType from './actionType'
/**
 * 这样做将使 action 创建函数更容易被移植和测试。
 * 一个组件中的action也可能被其他组件调用，使用action创建函数可以保证创建的action正确
 */