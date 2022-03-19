varying vec3 v_Normal;

void main(){
  v_Normal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
