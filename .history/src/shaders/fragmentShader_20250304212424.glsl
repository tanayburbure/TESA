varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;

void main() {
   float blocks = 20.0;
   vec2 blocksUv = floor(vUv * blocks) / blocks;
   float distance = length(blocksUv - uMouse); 
   float effect = smoothstep(0.2, 0.0, distance); // Reduced the area of effect
   vec2 distortion = vec2(0.02) * effect; // Reduced distortion amount

   vec4 color = texture2D(uTexture, vUv + (distortion * uHover));
   gl_FragColor = color;
}
