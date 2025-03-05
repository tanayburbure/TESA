varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;

void main() {
   float blocks = 15.0;
   vec2 blocksUv = floor(vUv * blocks) / blocks;
   float distance = length(blocksUv - uMouse); 
   float effect = smoothstep(0.5, 0.5, distance);
   vec2 distortion = vec2(0.020) * effect; // Reduced distortion area

   vec4 color = texture2D(uTexture, vUv + (distortion * uHover));
   gl_FragColor = color;
}
