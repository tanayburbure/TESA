varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;

void main() {
   float blocks = 20.0; // Increased blocks for finer detail
   vec2 blocksUv = floor(vUv * blocks) / blocks;
   float distance = length(blocksUv - uMouse); 
   float effect = smoothstep(0.3, 0.1, distance); // Adjusted smoothstep for a more pronounced effect
   vec2 distortion = vec2(0.03) * effect; // Increased distortion for a more dynamic look

   vec4 color = texture2D(uTexture, vUv + (distortion * uHover));
   gl_FragColor = mix(color, vec4(1.0, 1.0, 1.0, 0.5), effect * 0.5); // Added a mix with white for a highlight effect
}
