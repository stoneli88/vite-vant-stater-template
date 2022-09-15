import { ResultEnum } from '../src/enums/http'

export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    result,
    message,
    type: 'success'
  }
}

export function resultError(
  message = 'Request failed',
  { code = ResultEnum.ERROR, result = null } = {}
) {
  return {
    code,
    result,
    message,
    type: 'error'
  }
}
