plugins {
    kotlin("jvm") version "1.4.32"
    kotlin("plugin.serialization") version "1.4.32"
    id("org.hidetake.swagger.generator") version "2.18.2"
}

repositories {
    mavenCentral()
    jcenter()
}

dependencies {
    implementation("org.junit.jupiter:junit-jupiter:5.4.2")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.1.0")
    implementation("com.charleskorn.kaml:kaml:0.30.0")
    implementation("org.openapi4j:openapi-parser:1.0.7")
    implementation("org.openapi4j:openapi-schema-validator:1.0.7")
    testImplementation("org.junit.jupiter:junit-jupiter:5.4.2")
    testImplementation("org.junit.jupiter:junit-jupiter-params:5.7.0")
    testImplementation("com.google.jimfs:jimfs:1.2")
    swaggerUI("org.webjars:swagger-ui:3.10.0")
}

tasks {
    withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions.jvmTarget = "1.8"
    }
}

tasks.test {
    useJUnitPlatform()
    testLogging {
        events("passed", "skipped", "failed")
    }
}


swaggerSources {
    register("xjdf") {
        setInputFile(file("build/resources/main/xjdf.yml"))
    }
}

tasks.withType<org.hidetake.gradle.swagger.generator.GenerateSwaggerUI> {
    dependsOn("execute")
}

task("execute", JavaExec::class) {
    group = "myCustomTasks"
    main = "org.cip4.xjdf.openapi.MainKt"
    classpath = sourceSets["main"].runtimeClasspath
}
