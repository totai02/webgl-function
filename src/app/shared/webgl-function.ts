import { glMatrix, mat4 } from 'gl-matrix';
import * as twgl from 'twgl.js'

export class GL extends WebGLRenderingContext{

    public static create(gl: WebGLRenderingContext) {
        if (!GL.instance) {
            GL.instance = new GL(gl);
        }
        else {
            GL.instance._gl = gl;
            GL.instance.initData();
        }
    }

    private constructor(gl: WebGLRenderingContext) {
        super();
        this._gl = gl;
        this.initData();
    }

    private initData() {

    }

    private static instance: GL;

    private _gl: WebGLRenderingContext;

    private matrixStack: Array<{
        u_world: mat4,
        u_view: mat4,
        u_proj: mat4,
    }>
}

export function glClearColor() {}

export function glClear() {}

export function glBegin() {}

export function glEnd() {}

export function glEnable() {}

export function glDisable() {}

export function glViewport() {}

export function glLoadIdentity() {}

export function glMatrixMode() {}

export function glOrtho() {}

export function glPerspective() {}

export function glLight() {}

export function glPushMatrix() {}

export function glPopMatrix() {}

export function glVertex3() {}

export function glTextCoord2() {}

export function glNormal3() {}

export function glTranslate() {}

export function glRotate() {}

export function glScale() {}

export function glColor() {}
