#version 330 core

in vec2 TexCoord;
out vec4 FragColor;

// Texture samplers
uniform sampler2D ourTexture;

uniform vec3 lightPos; 
uniform vec3 viewPos; 
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    FragColor = texture(ourTexture, TexCoord);


}