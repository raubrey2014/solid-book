import Point from './point';

class Point3D extends Point {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);

        this.z = z;
    }

    add(point: Point3D): Point3D {
        const point2D: Point = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

export default Point3D;
