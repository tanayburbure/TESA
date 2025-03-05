varying float vElevation;
uniform float uColorChange;

void main() {
            vec4 c1 = vec4(1.,.7255, 0.8157, 1.0);
            vec4 c2 = vec4(1.,.8235, 0.8824, 1.0);

            vec4 c3 = vec4(1.,.9216, .8588, 1.0);
            vec4 c4 = vec4(1.,.8686, .9451, 1.0);

            vec4 lightBlue = vec4(0.6784, 0.8471, 0.9010, 1.0); // Light blue color
            vec4 lightBlueWithWhite = vec4(0.8314, 0.9333, 0.9608, 1.0); // Light blue with white effect

            float v= smoothstep(-.14,.14,vElevation);
            vec4 colorred = mix(c1,c2,v);
            vec4 coloryellow = mix(c3,c4,v);
            vec4 colorblue = mix(lightBlue, lightBlueWithWhite, uColorChange);
            vec4 final = mix(colorred, coloryellow, uColorChange);
            final = mix(final, colorblue, uColorChange); // Mix the final color with the blue shades

            gl_FragColor = final;
        }