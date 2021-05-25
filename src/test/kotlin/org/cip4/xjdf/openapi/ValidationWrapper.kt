package org.cip4.xjdf.openapi

import org.openapi4j.core.validation.ValidationException
import org.openapi4j.core.validation.ValidationResults
import org.openapi4j.parser.model.v3.OpenApi3
import org.openapi4j.parser.validation.v3.OpenApi3Validator

class ValidationWrapper {
    fun validate(api: OpenApi3): ValidationResults {
        val results: ValidationResults = try {
            OpenApi3Validator.instance().validate(api)
        } catch (e: ValidationException) {
            e.results()
        }

        val filteredResults = ValidationResults()
        results.items()
            .filter { it.code() != 111 }
            .forEach { filteredResults.add(it) }

        return filteredResults
    }
}