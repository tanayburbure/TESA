varying float vElevation;
uniform float uColorChange;

void main() {
            vec4 c1 = vec4(1.,.7255, 0.8157, 1.0);
            vec4 c2 = vec4(1.,.8235, 0.8824, 1.0);

            vec4 c3 = vec4(1.,.9216, .8588, 1.0);
            vec4 c4 = vec4(1.,.8686, .9451, 1.0);

            float v= smoothstep(-.14,.14,vElevation);
            vec4 colorred = mix(c1,c2,v);
            vec4 coloryellow = mix(c3,c4,v);
            vec4 final = mix(colorred, coloryellow, uColorChange);

            gl_FragColor = final;
        }