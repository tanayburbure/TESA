varying float vElevation;
uniform float uColorChange;

void main() {
    vec4 c1 = vec4(0.5647, 0.7333, 0.6510, 1.0);
    vec4 c2 = vec4(0.5647, 0.7333, 0.6510, 1.0);
    // vec4 c2 = vec4(0.6530, 0.7553, 0.6988, 1.0);



    vec4 c5 = vec4(0.8519, 0.8127, 0.9761, 1.0);
    vec4 c6 = vec4(0.9490, 0.9019, 1.0, 1.0);

    vec4 c3 = vec4(0.6784, 0.8471, 0.9010, 1.0);
    vec4 c4 = vec4(0.8314, 0.9333, 0.9608, 1.0);


    float v = smoothstep(-0.14, 0.14, vElevation);
    vec4 colorRed = mix(c1, c2, v);
    vec4 colorYellow = mix(c3, c4, v);
    vec4 colorBlue = mix(c5, c6, v);

    vec4 finalColor = mix(colorRed, colorYellow, smoothstep(0.4, 1.0, uColorChange));
    finalColor = mix(finalColor, colorBlue, smoothstep(1.4, 2.0, uColorChange));

    gl_FragColor = finalColor;
}
