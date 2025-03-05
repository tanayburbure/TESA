varying float vElevation;
uniform float uColorChange;

void main() {
    vec4 c1 = vec4(1.0, 0.7255, 0.8157, 1.0);
    vec4 c2 = vec4(1.0, 0.8235, 0.8824, 1.0);

    vec4 c3 = vec4(0.9019, 0.8627, 0.9961, 1.0); // #E7DCFE color
    vec4 c4 = vec4(0.9333, 0.8824, 1.0, 1.0); // Lighter than c3

    vec4 c5 = vec4(0.6784, 0.8471, 0.9010, 1.0);
    vec4 c6 = vec4(0.8314, 0.9333, 0.9608, 1.0);

    vec4 c7 = vec4(0.2, 0.2, 0.2, 1.0); // Dark grey
    vec4 c8 = vec4(0.3, 0.3, 0.3, 1.0); // Slightly lighter dark grey

    float v = smoothstep(-0.14, 0.14, vElevation);
    vec4 colorRed = mix(c1, c2, v);
    vec4 colorYellow = mix(c3, c4, v);
    vec4 colorBlue = mix(c5, c6, v);
    vec4 colorDarkGrey = mix(c7, c8, v); // Mix dark grey colors

    vec4 finalColor = mix(colorRed, colorYellow, smoothstep(0.4, 1.0, uColorChange));
    finalColor = mix(finalColor, colorBlue, smoothstep(1.4, 2.0, uColorChange));

    // Adjusted transition for a smoother dark grey fade
    float greyFactor = smoothstep(2.5, 3.5, uColorChange);
    finalColor = mix(finalColor, colorDarkGrey, greyFactor);

    gl_FragColor = finalColor;
}
