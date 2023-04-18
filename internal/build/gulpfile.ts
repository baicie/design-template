import path from 'node:path';
import { parallel, series } from 'gulp';
import { run, runTask, withTaskName } from './src';
import { mkdir } from 'node:fs/promises';
import { dtOutput } from '@design-template/build-utils';
import Undertaker from 'undertaker'

// 同步执行


export default series(
  // 在根目录执行pnpm run clean 进程别名clean
  withTaskName('clean', () => run('pnpm run clean')),
  // 创建输出文件夹 并且创建父文件夹
  withTaskName('createOutput', () => mkdir(dtOutput, { recursive: true })),
  // 并行执行
  parallel(
    runTask('buildModules'),
  )
) as Undertaker.TaskFunction