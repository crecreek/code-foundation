import React from 'react'
export function ButtonTest(){
  return '22777'
}

export default function Button() {
  const str: string = '开始-----====='
  var s = new Set<string>()
  s.add('dududddd')
  const arr: string[] = Array.from(s);
  return <button>{str}{arr}</button>
}
