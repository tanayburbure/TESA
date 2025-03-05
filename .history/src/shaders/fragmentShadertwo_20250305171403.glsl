varying float vElevation;
uniform float uColorChange;

void main() {
    vec4 c1 = vec4(1.0, 0.7255, 0.8157, 1.0);
    vec4 c2 = vec4(1.0, 0.8235, 0.8824, 1.0);

    vec4 c3 = vec4(1.0, 0.9608, 0.8706, 1.0);
    vec4 c4 = vec4(1.0, 0.9608, 0.8706, 1.0);
    
    vec4 c5 = vec4(0.6784, 0.8471, 0.9010, 1.0);
    vec4 c6 = vec4(0.8314, 0.9333, 0.9608, 1.0);

    vec4 c7 = vec4(1.0, 0.9608, 0.8706, 1.0); // New yellow color
    vec4 c8 = vec4(1.0, 0.9608, 0.8706, 1.0); // New yellow color

    float v = smoothstep(-0.14, 0.14, vElevation);
    vec4 colorRed = mix(c1, c2, v);
    vec4 colorYellow = mix(c3, c4, v);
    vec4 colorBlue = mix(c5, c6, v);
    vec4 colorYellowEffect = mix(c7, c8, v); // New yellow effect

    vec4 finalColor = mix(colorRed, colorYellow, smoothstep(0.4, 1.0, uColorChange));
    finalColor = mix(finalColor, colorYellowEffect, smoothstep(1.0, 1.4, uColorChange)); // Apply yellow effect
    finalColor = mix(finalColor, colorBlue, smoothstep(1.4, 2.0, uColorChange));

    gl_FragColor = finalColor;
}
