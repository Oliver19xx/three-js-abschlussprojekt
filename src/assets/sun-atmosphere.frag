varying vec3 v_Normal;

void main(){
  float intensity = pow(0.5 - dot(v_Normal, vec3(0, 0, 1)), 2.0);
  gl_FragColor = vec4(1, 0.3, 0.3, 1.0) * intensity;
}
