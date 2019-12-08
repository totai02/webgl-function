import { mat4 } from 'gl-matrix';
import * as twgl from 'twgl.js'


interface BufferData {
    position: Float32Array;
    texCoord: Float32Array;
    normals: Float32Array;
    colors: Float32Array;
    indices: Float32Array;
}

interface UniformData {
    world: mat4;
    view: mat4;
    proj: mat4;
    texture: WebGLTexture;
}

/**
 * @description GL class provide WebGL commands
 */
export class GL extends WebGLRenderingContext {

    /**
     * Matrix name
     */
    public static MODELVIEW: number = 0;
    public static PROJECTION: number = 1;

    /**
     * Light source
     */
    public static LIGHT1: number = 3;
    public static LIGHT2: number = 4;
    public static LIGHT3: number = 5;
    public static LIGHT4: number = 6;
    public static LIGHT5: number = 7;
    public static MAX_LIGHTS: number = 5;

    /**
     * Light property
     */
    public static AMBIENT: number = 8;
    public static DIFFUSE: number = 9;
    public static SPECULAR: number = 10;
    public static POSITION: number = 11;

    /**
     * Create and set webgl context for singeton GL object.
     * @param gl WebGL context of canvas
     */
    public static create(gl: WebGLRenderingContext) {
        if (!GL.instance) {
            GL.instance = new GL(gl);
        }
        else {
            GL.instance._gl = gl;
            GL.instance.initData();
        }
    }

    /**
     * The glClearColor function specifies clear values for the color buffers.
     * @param red The red value that glClear uses to clear the color buffers. The default value is zero
     * @param green The green value that glClear uses to clear the color buffers. The default value is zero.
     * @param blue The blue value that glClear uses to clear the color buffers. The default value is zero.
     * @param alpha The alpha value that glClear uses to clear the color buffers. The default value is zero.
     */
    public static clearColor(red: number = 0, green: number = 0, blue: number = 0, alpha: number = 0) {

    }

    /**
     * The glClear function clears buffers to preset values.
     * @param mask Bitwise OR operators of masks that indicate the buffers to be cleared
     */
    public static clear(mask: number) {

    }

    /**
     * The glBegin function delimit the vertices of a primitive or a group of like primitives. 
     * @param mode The primitive or primitives that will be created from vertices presented 
     *              between begin and the subsequent end
     */
    public static begin(mode: number) {

    }

    /**
     * The glEnd function delimit the vertices of a primitive or a group of like primitives. 
     */
    public static end() {

    }

    /**
     * The glEnable function enable WebGL capabilities.
     * @param cap A symbolic constant indicating an OpenGL capability
     */
    public static enable(cap: number) {

    }

    /**
     * The glDisable function disable OpenGL capabilities.
     * @param cap A symbolic constant indicating an OpenGL capability
     */
    public static disable(cap: number) {

    }

    /**
     * The glLoadIdentity function replaces the current matrix with the identity matrix.
     */
    public static loadIdentity() {

    }

    /**
     * The glMatrixMode function specifies which matrix is the current matrix.
     * @param mode The matrix stack that is the target for subsequent matrix operations.
     * The mode parameter can assume one of two values: MODELVIEW, PROJECTION
     */
    public static matrixMode(mode: number) {

    }

    /**
     * The glOrtho function multiplies the current matrix by an orthographic matrix.
     * @param left The coordinates for the left vertical clipping plane.
     * @param right The coordinates for the right vertical clipping plane.
     * @param bottom The coordinates for the bottom horizontal clipping plane.
     * @param top The coordinates for the top horizontal clipping plans.
     * @param zNear The distances to the nearer depth clipping plane. This distance is negative if the plane is to be behind the viewer.
     * @param zFar The distances to the farther depth clipping plane. This distance is negative if the plane is to be behind the viewer.
     */
    public static ortho(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number) {

    }

    /**
     * The gluPerspective function sets up a perspective projection matrix.
     * @param fovy The field of view angle, in degrees, in the y-direction.
     * @param aspect The aspect ratio that determines the field of view in the x-direction. The aspect ratio is the ratio of x (width) to y (height).
     * @param zNear The distance from the viewer to the near clipping plane (always positive).
     * @param zFar The distance from the viewer to the far clipping plane (always positive).
     */
    public static perspective(fovy: number, aspect: number, zNear: number, zFar: number) {

    }

    /**
     * The gluLookAt function defines a viewing transformation.
     * @param eye The position of the eye point.
     * @param center The position of the reference point.
     * @param up The direction of the up vector.
     */
    public static lookAt(eye: number[], center: number[], up: number[]) {

    }

    /**
     * 
     * @param light The identifier of a light. 
     * The number of possible lights depends on the implementation, but at least eight lights are supported. 
     * They are identified by symbolic names of the form GL_LIGHTi where i is a value: 0 to MAX_LIGHTS - 1.
     * @param pname A light source parameter for light [AMBIENT, DIFFUSE, SPECULAR, POSITION].
     * @param params Specifies the value that parameter pname of light source light will be set to.
     */
    public static light(light: number, pname: number, params: number | number[]) {

    }

    /**
     * The glPushMatrix function push the current matrix stack.
     */
    public static pushMatrix() { }

    /**
     * The glPopMatrix function pop the current matrix stack.
     */
    public static popMatrix() {

    }

    /**
     * Specifies a vertex.
     * @param x Specifies the x-coordinate of a vertex.
     * @param y Specifies the y-coordinate of a vertex.
     */
    public static vertex2(x: number, y: number) {

    }

    /**
     * Specifies a vertex.
     * @param x Specifies the x-coordinate of a vertex.
     * @param y Specifies the y-coordinate of a vertex.
     * @param z Specifies the z-coordinate of a vertex.
     */
    public static vertex3(x: number, y: number, z: number) {

    }

    /**
     * Sets the current texture coordinates.
     * @param s The s texture coordinate.
     */
    public static textCoord1(s: number) {

    }

    /**
     * Sets the current texture coordinates.
     * @param s The s texture coordinate.
     * @param t The t texture coordinate.
     */
    public static textCoord2(s: number, t: number) {

    }

    /**
     * Sets the current normal vector.
     * @param nx Specifies the x-coordinate for the new current normal vector.
     * @param ny Specifies the y-coordinate for the new current normal vector.
     * @param nz Specifies the z-coordinate for the new current normal vector.
     */
    public static normal3(nx: number, ny: number, nz: number) {

    }

    /**
     * The glIndex function sets the current color index.
     * @param c The new value for the current color index.
     */
    public static index(c: number) {

    }

    /**
     * The glPointSize function specifies the diameter of rasterized points.
     * @param size The diameter of rasterized points. The default is 1.0.
     */
    public static pointSize(size: number = 1.0) {

    }

    /**
     * The glLineStipple function specifies the line stipple pattern.
     * @param factor A multiplier for each bit in the line stipple pattern. 
     * If factor is 3, for example, each bit in the pattern will be used three times before the next bit in the pattern is used. 
     * The factor parameter is clamped to the range [1, 256] and defaults to one.
     * @param pattern A 16-bit integer whose bit pattern determines which fragments of a line will be drawn when the line is rasterized. 
     * Bit zero is used first, and the default pattern is all ones.
     */
    public static lineStipple(factor: number = 1.0, pattern: number = 65536) {   // 16 bit: 2^16

    }

    /**
     * 
     * @param x The x (vertical axis) coordinate for the lower-left corner of the scissor box.
     * @param y The y (horizontal axis) coordinate for the lower-left corner of the scissor box. 
     * Together, x and y specify the lower-left corner of the scissor box. Initially (0,0).
     * @param width The width of the scissor box.
     * @param height The height of the scissor box. When an OpenGL context is first attached to a window, 
     * width and height are set to the dimensions of that window.
     */
    public static scissor(x: number, y: number, width: number, height: number) {

    }

    /**
     * The glTranslate function multiplies the current matrix by a translation matrix.
     * @param x The x coordinate of a translation vector.
     * @param y The y coordinate of a translation vector.
     * @param z The z coordinate of a translation vector.
     */
    public static translate(x: number, y: number, z: number) {

    }

    /**
     * The glRotate function multiplies the current matrix by a rotation matrix.
     * @param angle The angle of rotation, in degrees.
     * @param x The x coordinate of a vector.
     * @param y The y coordinate of a vector.
     * @param z The z coordinate of a vector.
     */
    public static rotate(angle: number, x: number, y: number, z: number) {

    }

    /**
     * The glScale function multiply the current matrix by a general scaling matrix.
     * @param x Scale factors along the x axis
     * @param y Scale factors along the y axis
     * @param z Scale factors along the z axis
     */
    public static scale(x: number, y: number, z: number) {

    }

    /**
     * Sets the current color.
     * @param red The new red value for the current color.
     * @param green The new green value for the current color.
     * @param blue The new blue value for the current color.
     */
    public static color(red: number, green: number, blue: number) { }

    private constructor(gl: WebGLRenderingContext) {
        super();
        this._gl = gl;
        this.initData();
    }

    private initData() {

    }

    private static instance: GL;

    private _gl: WebGLRenderingContext;

    private static get gl(): WebGLRenderingContext {
        if (!GL.instance._gl) {
            console.error('Failed to get WebGLRenderingContext!');
            return undefined;
        }
        return GL.instance._gl;
    }

    private bufferStack: Array<BufferData>;

    private uniformStack: Array<UniformData>;
}
