import { parallel } from "gulp";
import { withTaskName } from "../utils";

async function buildFullEntry(minify: boolean) {

}

async function buildFullLocale(minify: boolean) {

}



export const buildFull = (minify: boolean) => async () =>
  Promise.all([buildFullEntry(minify), buildFullLocale(minify)])


export const buildFullBundle = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false))
)