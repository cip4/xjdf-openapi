package org.cip4.xjdf.openapi

import java.io.Writer

class YmlWriter(
    private val writer: Writer,
    private val indent: Int = 0
) {

    internal fun writeLine(line: String): YmlWriter {
        writer.write(" ".repeat(indent) + line + "\n")
        return this
    }

    internal fun writeLines(lines: String): YmlWriter {
        writer.write(lines.trimEnd(' ', '\n').prependIndent(" ".repeat(indent)) + "\n")
        return this
    }

    internal fun indent(): YmlWriter {
        return YmlWriter(writer, indent + 2)
    }

    fun write(s: String) {
        writer.write(" ".repeat(indent) + s)
    }

}