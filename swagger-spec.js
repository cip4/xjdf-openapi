window.swaggerSpec={
  "openapi" : "3.0.0",
  "info" : {
    "title" : "CLOUD-XJDF",
    "description" : "The json flavour of XJDF",
    "version" : "0.0.1"
  },
  "paths" : {
    "/queue-entry/submit" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandSubmitQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandSubmitQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandSubmitQueueEntry" ]
              }
            },
            "multipart/form-data" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "XJMF" : {
                    "type" : "object",
                    "properties" : {
                      "Version" : {
                        "type" : "string"
                      },
                      "Header" : {
                        "$ref" : "#/components/schemas/Header"
                      },
                      "CommandSubmitQueueEntry" : {
                        "$ref" : "#/components/schemas/CommandSubmitQueueEntry"
                      }
                    },
                    "required" : [ "Header", "CommandSubmitQueueEntry" ]
                  },
                  "XJDF" : {
                    "$ref" : "#/components/schemas/XJDF"
                  },
                  "attachments" : {
                    "type" : "array",
                    "items" : {
                      "type" : "string",
                      "format" : "binary"
                    }
                  }
                },
                "required" : [ "XJMF" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseSubmitQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseSubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseSubmitQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/modify" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandModifyQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandModifyQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandModifyQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseModifyQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseModifyQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseModifyQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/resubmit" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandResubmitQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandResubmitQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandResubmitQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseResubmitQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseResubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseResubmitQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/return" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandReturnQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandReturnQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandReturnQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseReturnQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseReturnQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseReturnQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/request" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandRequestQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandRequestQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandRequestQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseRequestQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseRequestQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseRequestQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/gang/force" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandForceGang" : {
                    "$ref" : "#/components/schemas/CommandForceGang"
                  }
                },
                "required" : [ "Header", "CommandForceGang" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseForceGang" : {
                      "$ref" : "#/components/schemas/ResponseForceGang"
                    }
                  },
                  "required" : [ "Header", "ResponseForceGang" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/gang/status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryGangStatus" : {
                    "$ref" : "#/components/schemas/QueryGangStatus"
                  }
                },
                "required" : [ "Header", "QueryGangStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseGangStatus" : {
                      "$ref" : "#/components/schemas/ResponseGangStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseGangStatus" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryGangStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalGangStatus" : {
                            "$ref" : "#/components/schemas/SignalGangStatus"
                          }
                        },
                        "required" : [ "Header", "SignalGangStatus" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/known-devices" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryKnownDevices" : {
                    "$ref" : "#/components/schemas/QueryKnownDevices"
                  }
                },
                "required" : [ "Header", "QueryKnownDevices" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseKnownDevices" : {
                      "$ref" : "#/components/schemas/ResponseKnownDevices"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownDevices" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryKnownDevices/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalKnownDevices" : {
                            "$ref" : "#/components/schemas/SignalKnownDevices"
                          }
                        },
                        "required" : [ "Header", "SignalKnownDevices" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/known-messages" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryKnownMessages" : {
                    "$ref" : "#/components/schemas/QueryKnownMessages"
                  }
                },
                "required" : [ "Header", "QueryKnownMessages" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseKnownMessages" : {
                      "$ref" : "#/components/schemas/ResponseKnownMessages"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownMessages" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/known-subscriptions" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryKnownSubscriptions" : {
                    "$ref" : "#/components/schemas/QueryKnownSubscriptions"
                  }
                },
                "required" : [ "Header", "QueryKnownSubscriptions" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseKnownSubscriptions" : {
                      "$ref" : "#/components/schemas/ResponseKnownSubscriptions"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownSubscriptions" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryKnownSubscriptions/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalKnownSubscriptions" : {
                            "$ref" : "#/components/schemas/SignalKnownSubscriptions"
                          }
                        },
                        "required" : [ "Header", "SignalKnownSubscriptions" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/notification" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryNotification" : {
                    "$ref" : "#/components/schemas/QueryNotification"
                  }
                },
                "required" : [ "Header", "QueryNotification" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseNotification" : {
                      "$ref" : "#/components/schemas/ResponseNotification"
                    }
                  },
                  "required" : [ "Header", "ResponseNotification" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryNotification/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalNotification" : {
                            "$ref" : "#/components/schemas/SignalNotification"
                          }
                        },
                        "required" : [ "Header", "SignalNotification" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/pipe-control" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandPipeControl" : {
                    "$ref" : "#/components/schemas/CommandPipeControl"
                  }
                },
                "required" : [ "Header", "CommandPipeControl" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponsePipeControl" : {
                      "$ref" : "#/components/schemas/ResponsePipeControl"
                    }
                  },
                  "required" : [ "Header", "ResponsePipeControl" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryQueueStatus" : {
                    "$ref" : "#/components/schemas/QueryQueueStatus"
                  }
                },
                "required" : [ "Header", "QueryQueueStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseQueueStatus" : {
                      "$ref" : "#/components/schemas/ResponseQueueStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseQueueStatus" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/resource/command" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandResource" : {
                    "$ref" : "#/components/schemas/CommandResource"
                  }
                },
                "required" : [ "Header", "CommandResource" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseResource" : {
                      "$ref" : "#/components/schemas/ResponseResource"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/resource/query" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryResource" : {
                    "$ref" : "#/components/schemas/QueryResource"
                  }
                },
                "required" : [ "Header", "QueryResource" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseResource" : {
                      "$ref" : "#/components/schemas/ResponseResource"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryResource/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalResource" : {
                            "$ref" : "#/components/schemas/SignalResource"
                          }
                        },
                        "required" : [ "Header", "SignalResource" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/persistent-channel/stop" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandStopPersistentChannel" : {
                    "$ref" : "#/components/schemas/CommandStopPersistentChannel"
                  }
                },
                "required" : [ "Header", "CommandStopPersistentChannel" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseStopPersistentChannel" : {
                      "$ref" : "#/components/schemas/ResponseStopPersistentChannel"
                    }
                  },
                  "required" : [ "Header", "ResponseStopPersistentChannel" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryStatus" : {
                    "$ref" : "#/components/schemas/QueryStatus"
                  }
                },
                "required" : [ "Header", "QueryStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseStatus" : {
                      "$ref" : "#/components/schemas/ResponseStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseStatus" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalStatus" : {
                            "$ref" : "#/components/schemas/SignalStatus"
                          }
                        },
                        "required" : [ "Header", "SignalStatus" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/wake-up" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandWakeUp" : {
                    "$ref" : "#/components/schemas/CommandWakeUp"
                  }
                },
                "required" : [ "Header", "CommandWakeUp" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseWakeUp" : {
                      "$ref" : "#/components/schemas/ResponseWakeUp"
                    }
                  },
                  "required" : [ "Header", "ResponseWakeUp" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/shutdown" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandShutDown" : {
                    "$ref" : "#/components/schemas/CommandShutDown"
                  }
                },
                "required" : [ "Header", "CommandShutDown" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseShutDown" : {
                      "$ref" : "#/components/schemas/ResponseShutDown"
                    }
                  },
                  "required" : [ "Header", "ResponseShutDown" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "Resource" : {
        "type" : "object",
        "properties" : {
          "AmountPool" : {
            "$ref" : "#/components/schemas/AmountPool"
          },
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "SpecificResource" : {
            "$ref" : "#/components/schemas/SpecificResource"
          },
          "Brand" : {
            "type" : "string"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Duration" : {
            "type" : "string",
            "format" : "duration"
          },
          "Expires" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GrossWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "ResourceWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "Start" : {
            "type" : "string",
            "format" : "date-time"
          },
          "StartOffset" : {
            "type" : "string",
            "format" : "duration"
          },
          "Status" : {
            "type" : "string",
            "enum" : [ "Available", "Unavailable" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Transformation" : {
            "$ref" : "#/components/schemas/matrix"
          }
        }
      },
      "Intent" : {
        "type" : "object",
        "properties" : {
          "ProductIntent" : {
            "$ref" : "#/components/schemas/ProductIntent"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Name" ]
      },
      "AmountPool" : {
        "type" : "object",
        "properties" : {
          "PartAmount" : {
            "$ref" : "#/components/schemas/PartAmount"
          }
        },
        "required" : [ "PartAmount" ]
      },
      "PartAmount" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "PartWaste" : {
            "$ref" : "#/components/schemas/PartWaste"
          },
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "MaxAmount" : {
            "type" : "number",
            "format" : "float"
          },
          "MinAmount" : {
            "type" : "number",
            "format" : "float"
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "PartWaste" : {
        "type" : "object",
        "properties" : {
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          },
          "WasteDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Waste" ]
      },
      "Product" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Intent" : {
            "$ref" : "#/components/schemas/Intent"
          },
          "Amount" : {
            "type" : "integer"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "IsRoot" : {
            "type" : "boolean"
          },
          "MaxAmount" : {
            "type" : "integer"
          },
          "MinAmount" : {
            "type" : "integer"
          },
          "PartVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductTypeDetails" : {
            "type" : "string"
          }
        }
      },
      "ProductList" : {
        "type" : "object",
        "properties" : {
          "Product" : {
            "$ref" : "#/components/schemas/Product"
          }
        },
        "required" : [ "Product" ]
      },
      "Dependent" : {
        "type" : "object",
        "properties" : {
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PipeID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PipeProtocol" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "XJMFURL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "JobID" ]
      },
      "XJDF" : {
        "type" : "object",
        "properties" : {
          "AuditPool" : {
            "$ref" : "#/components/schemas/AuditPool"
          },
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "ProductList" : {
            "$ref" : "#/components/schemas/ProductList"
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "Category" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ICSVersions" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProjectID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedProjectID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Version" : {
            "$ref" : "#/components/schemas/Version"
          }
        },
        "required" : [ "JobID", "Types" ]
      },
      "ResourceSet" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "Dependent" : {
            "$ref" : "#/components/schemas/Dependent"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Resource" : {
            "$ref" : "#/components/schemas/Resource"
          },
          "CombinedProcessIndex" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProcessUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Unit" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Usage" : {
            "type" : "string",
            "enum" : [ "Input", "Output" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Name" ]
      },
      "DeviceFilter" : {
        "type" : "object",
        "properties" : {
          "DeviceDetails" : {
            "type" : "string",
            "enum" : [ "Brief", "Modules", "Full" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "DeviceInfo" : {
        "type" : "object",
        "properties" : {
          "Activity" : {
            "$ref" : "#/components/schemas/Activity"
          },
          "Event" : {
            "$ref" : "#/components/schemas/Event"
          },
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          },
          "JobPhase" : {
            "$ref" : "#/components/schemas/JobPhase"
          },
          "CounterUnit" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "HourCounter" : {
            "type" : "string",
            "format" : "duration"
          },
          "IdleStartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "PowerOnTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ProductionCounter" : {
            "type" : "number",
            "format" : "float"
          },
          "Speed" : {
            "type" : "number",
            "format" : "float"
          },
          "Status" : {
            "$ref" : "#/components/schemas/DeviceStatus"
          },
          "StatusDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ToolIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "TotalProductionCounter" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Status" ]
      },
      "GangCmdFilter" : {
        "type" : "object",
        "properties" : {
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Policy" : {
            "type" : "string",
            "enum" : [ "All", "Optimized" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "GangInfo" : {
        "type" : "object",
        "properties" : {
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "GangName" ]
      },
      "GangQuFilter" : {
        "type" : "object",
        "properties" : {
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "XJMF" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          },
          "Version" : {
            "$ref" : "#/components/schemas/Version"
          }
        },
        "required" : [ "Header" ]
      },
      "JobPhase" : {
        "type" : "object",
        "properties" : {
          "Activity" : {
            "$ref" : "#/components/schemas/Activity"
          },
          "GangSource" : {
            "$ref" : "#/components/schemas/GangSource"
          },
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "CostCenterID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DeadLine" : {
            "type" : "string",
            "enum" : [ "InTime", "Late", "Warning" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "PercentCompleted" : {
            "type" : "number",
            "format" : "float"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RestTime" : {
            "type" : "string",
            "format" : "duration"
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Status" : {
            "$ref" : "#/components/schemas/NodeStatus"
          },
          "StatusDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ToolIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          },
          "WorkStepID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "JobID", "Status" ]
      },
      "Activity" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "ActivityID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ActivityName" : {
            "type" : "string"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "PersonalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Roles" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          }
        }
      },
      "Header" : {
        "type" : "object",
        "properties" : {
          "AgentName" : {
            "type" : "string"
          },
          "AgentVersion" : {
            "type" : "string"
          },
          "Author" : {
            "type" : "string"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "DeviceID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ICSVersions" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "PersonalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "refID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Time" : {
            "type" : "string",
            "format" : "date-time"
          }
        },
        "required" : [ "DeviceID", "Time" ]
      },
      "MessageService" : {
        "type" : "object",
        "properties" : {
          "ResponseModes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "FireAndForget", "Reliable", "Response" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Type" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URLSchemes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "http", "https" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "Type" ]
      },
      "PipeParams" : {
        "type" : "object",
        "properties" : {
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Close", "Pause", "Pull", "Push" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PipeID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "JobID", "Operation", "PipeID" ]
      },
      "Queue" : {
        "type" : "object",
        "properties" : {
          "QueueEntry" : {
            "$ref" : "#/components/schemas/QueueEntry"
          },
          "MaxQueueSize" : {
            "type" : "integer"
          },
          "QueueSize" : {
            "type" : "integer"
          },
          "UpdateGranularity" : {
            "$ref" : "#/components/schemas/UpdateGranularity"
          }
        }
      },
      "QueueEntry" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "GangSource" : {
            "$ref" : "#/components/schemas/GangSource"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GangPolicy" : {
            "$ref" : "#/components/schemas/EnumGangPolicy"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Priority" : {
            "type" : "integer"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Status" : {
            "$ref" : "#/components/schemas/NodeStatus"
          },
          "StatusDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SubmissionTime" : {
            "type" : "string",
            "format" : "date-time"
          }
        },
        "required" : [ "QueueEntryID", "Status" ]
      },
      "QueueFilter" : {
        "type" : "object",
        "properties" : {
          "GangSource" : {
            "$ref" : "#/components/schemas/GangSource"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "FirstEntry" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "LastEntry" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MaxEntries" : {
            "type" : "integer"
          },
          "MaxPriority" : {
            "type" : "integer"
          },
          "MinPriority" : {
            "type" : "integer"
          },
          "NewerThan" : {
            "type" : "string",
            "format" : "date-time"
          },
          "OlderThan" : {
            "type" : "string",
            "format" : "date-time"
          },
          "QueueEntryIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "StatusList" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/NodeStatus"
            }
          }
        }
      },
      "QueueSubmissionParams" : {
        "type" : "object",
        "properties" : {
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GangPolicy" : {
            "$ref" : "#/components/schemas/EnumGangPolicy"
          },
          "NextQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PrevQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Priority" : {
            "type" : "integer"
          },
          "ReturnJMF" : {
            "$ref" : "#/components/schemas/URL"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "URL" ]
      },
      "RequestQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueURL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueURL" ]
      },
      "ResourceCmdParams" : {
        "type" : "object",
        "properties" : {
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "UpdateMethod" : {
            "type" : "string",
            "enum" : [ "Complete", "CompleteSet", "Incremental", "Remove", "RemoveSet" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "ResourceSet", "UpdateMethod" ]
      },
      "ResourceInfo" : {
        "type" : "object",
        "properties" : {
          "Event" : {
            "$ref" : "#/components/schemas/Event"
          },
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "CommandResult" : {
            "type" : "string",
            "enum" : [ "Merged", "New", "Rejected", "Removed", "Replaced" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Level" : {
            "type" : "string",
            "enum" : [ "Empty", "Full", "High", "Low", "OK" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Scope" : {
            "$ref" : "#/components/schemas/Scope"
          },
          "Speed" : {
            "type" : "number",
            "format" : "float"
          },
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "TotalAmount" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "ResourceSet" ]
      },
      "ResourceQuParams" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ResourceDetails" : {
            "type" : "string",
            "enum" : [ "Brief", "Full" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ResourceName" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Scope" : {
            "$ref" : "#/components/schemas/Scope"
          }
        },
        "required" : [ "Scope" ]
      },
      "ResubmissionParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "UpdateMethod" : {
            "type" : "string",
            "enum" : [ "Complete", "Incremental", "Remove" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueEntryID", "UpdateMethod", "URL" ]
      },
      "ReturnQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueEntryID", "URL" ]
      },
      "ShutDownCmdParams" : {
        "type" : "object",
        "properties" : {
          "ShutDownType" : {
            "type" : "string",
            "enum" : [ "StandBy", "Full" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "StatusQuParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "StopPersChParams" : {
        "type" : "object",
        "properties" : {
          "ChannelID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MessageType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "Subscription" : {
        "type" : "object",
        "properties" : {
          "ChannelMode" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/EnumChannelMode"
            }
          },
          "Languages" : {
            "$ref" : "#/components/schemas/languages"
          },
          "RepeatTime" : {
            "type" : "number",
            "format" : "float"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "URL" ]
      },
      "SubscriptionFilter" : {
        "type" : "object",
        "properties" : {
          "DeviceID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "SubscriptionInfo" : {
        "type" : "object",
        "properties" : {
          "Subscription" : {
            "$ref" : "#/components/schemas/Subscription"
          },
          "ChannelID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DeviceID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MessageType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Subscription", "ChannelID", "MessageType" ]
      },
      "AuditPool" : {
        "type" : "object"
      },
      "Band" : {
        "type" : "object",
        "properties" : {
          "Height" : {
            "type" : "integer"
          },
          "Width" : {
            "type" : "integer"
          }
        }
      },
      "BundleItem" : {
        "type" : "object",
        "properties" : {
          "BundleItem" : {
            "$ref" : "#/components/schemas/BundleItem"
          },
          "Amount" : {
            "type" : "integer"
          },
          "BundleType" : {
            "$ref" : "#/components/schemas/BundleType"
          },
          "ItemRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "TotalAmount" : {
            "type" : "integer"
          },
          "TotalDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "TotalVolume" : {
            "type" : "number",
            "format" : "float"
          },
          "TotalWeight" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Amount" ]
      },
      "CellCondition" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          },
          "Side" : {
            "$ref" : "#/components/schemas/Side"
          }
        },
        "required" : [ "Condition", "Side" ]
      },
      "CoilBindingDetails" : {
        "type" : "object",
        "properties" : {
          "CoilShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "Comment" : {
        "type" : "object"
      },
      "Condition" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "PartContext" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Part" ]
      },
      "AuditCreated" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object"
        } ]
      },
      "EdgeGluing" : {
        "type" : "object",
        "properties" : {
          "EdgeGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          }
        }
      },
      "Emboss" : {
        "type" : "object",
        "properties" : {
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          },
          "Direction" : {
            "$ref" : "#/components/schemas/EnumEmbossDirection"
          },
          "EdgeAngle" : {
            "type" : "number",
            "format" : "float"
          },
          "EdgeShape" : {
            "type" : "string",
            "enum" : [ "Beveled", "Rounded" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "EmbossingType" : {
            "$ref" : "#/components/schemas/EmbossType"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Height" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToolRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          }
        },
        "required" : [ "Direction", "EmbossingType" ]
      },
      "EmbossingItem" : {
        "type" : "object",
        "properties" : {
          "Direction" : {
            "$ref" : "#/components/schemas/EnumEmbossDirection"
          },
          "EmbossingType" : {
            "$ref" : "#/components/schemas/EmbossType"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "FoilColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "FoilColorDetails" : {
            "type" : "string"
          },
          "Height" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ToolName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "EmbossingType" ]
      },
      "Event" : {
        "type" : "object",
        "properties" : {
          "EventID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "EventValue" : {
            "type" : "string"
          }
        },
        "required" : [ "EventID" ]
      },
      "FitPolicy" : {
        "type" : "object",
        "properties" : {
          "ClipOffset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ExpansionPolicy" : {
            "type" : "string",
            "enum" : [ "HorizontalOnly", "HorizontalVertical", "VerticalOnly", "VerticalHorizontal" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GutterPolicy" : {
            "type" : "string",
            "enum" : [ "Distribute", "Fixed" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "HorizontalGridDirection" : {
            "type" : "string",
            "enum" : [ "LeftToRight", "RightToLeft" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MinGutter" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "RotatePolicy" : {
            "type" : "string",
            "enum" : [ "NoRotate", "RotateOrthogonal", "RotateClockwise", "RotateCounterClockwise" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SizePolicy" : {
            "type" : "string",
            "enum" : [ "Abort", "ClipToMaxPage", "CompleteGrid", "FillGrid", "FitToPage", "ReduceToFit", "Tile" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "VerticalGridDirection" : {
            "type" : "string",
            "enum" : [ "BottomToTop", "TopToBottom" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "HardCoverBinding" : {
        "type" : "object",
        "properties" : {
          "RegisterRibbon" : {
            "$ref" : "#/components/schemas/RegisterRibbon"
          },
          "BlockThreadSewing" : {
            "type" : "boolean"
          },
          "CoverStyle" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "EndSheets" : {
            "type" : "boolean"
          },
          "HeadBands" : {
            "type" : "boolean"
          },
          "HeadBandColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "HeadBandColorDetails" : {
            "type" : "string"
          },
          "Jacket" : {
            "type" : "string",
            "enum" : [ "None", "Loose", "Glue" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JacketFoldingWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "JapanBind" : {
            "type" : "boolean"
          },
          "SpineGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          },
          "SpineOperations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Thickness" : {
            "type" : "number",
            "format" : "float"
          },
          "TightBacking" : {
            "$ref" : "#/components/schemas/TightBacking"
          }
        }
      },
      "Icon" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "BitDepth" : {
            "type" : "integer"
          },
          "IconUsage" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/DeviceStatus"
            }
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "BitDepth", "Size" ]
      },
      "IconList" : {
        "type" : "object",
        "properties" : {
          "Icon" : {
            "$ref" : "#/components/schemas/Icon"
          }
        },
        "required" : [ "Icon" ]
      },
      "ImageCompression" : {
        "type" : "object",
        "properties" : {
          "CCITTFaxParams" : {
            "$ref" : "#/components/schemas/CCITTFaxParams"
          },
          "DCTParams" : {
            "$ref" : "#/components/schemas/DCTParams"
          },
          "FlateParams" : {
            "$ref" : "#/components/schemas/FlateParams"
          },
          "JBIG2Params" : {
            "$ref" : "#/components/schemas/JBIG2Params"
          },
          "JPEG2000Params" : {
            "$ref" : "#/components/schemas/JPEG2000Params"
          },
          "LZWParams" : {
            "$ref" : "#/components/schemas/LZWParams"
          },
          "AntiAliasImages" : {
            "type" : "boolean"
          },
          "AutoFilterImages" : {
            "type" : "boolean"
          },
          "ConvertImagesToIndexed" : {
            "type" : "boolean"
          },
          "DCTQuality" : {
            "type" : "number",
            "format" : "float"
          },
          "DownsampleImages" : {
            "type" : "boolean"
          },
          "EncodeImages" : {
            "type" : "boolean"
          },
          "ImageAutoFilterStrategy" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ImageDepth" : {
            "type" : "integer"
          },
          "ImageDownsampleThreshold" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageDownsampleType" : {
            "type" : "string",
            "enum" : [ "Average", "Bicubic", "Subsample" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ImageFilter" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ImageResolution" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageType" : {
            "type" : "string",
            "enum" : [ "Color", "Grayscale", "Monochrome" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JPXQuality" : {
            "type" : "integer"
          }
        }
      },
      "InterpretingDetails" : {
        "type" : "object",
        "properties" : {
          "MinLineWidth" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "JobField" : {
        "type" : "object",
        "properties" : {
          "JobFormat" : {
            "type" : "string"
          },
          "JobTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "MarkObject" : {
        "type" : "object",
        "properties" : {
          "ColorControlStrip" : {
            "$ref" : "#/components/schemas/ColorControlStrip"
          },
          "CutMark" : {
            "$ref" : "#/components/schemas/CutMark"
          },
          "RegisterMark" : {
            "$ref" : "#/components/schemas/RegisterMark"
          },
          "ScavengerArea" : {
            "$ref" : "#/components/schemas/ScavengerArea"
          },
          "ContentRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          }
        }
      },
      "FillMark" : {
        "type" : "object",
        "properties" : {
          "MarkColor" : {
            "$ref" : "#/components/schemas/MarkColor"
          },
          "KnockoutBleed" : {
            "type" : "number",
            "format" : "float"
          },
          "KnockoutRefs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            }
          },
          "KnockoutSource" : {
            "type" : "string",
            "enum" : [ "ClipPath", "SourceClipPath", "TrimBox" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "MarkColor", "KnockoutSource" ]
      },
      "MarkColor" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string"
          },
          "Tint" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Name", "Tint" ]
      },
      "Milestone" : {
        "type" : "object",
        "properties" : {
          "MilestoneType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TypeAmount" : {
            "type" : "integer"
          }
        },
        "required" : [ "MilestoneType" ]
      },
      "Notification" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "Event" : {
            "$ref" : "#/components/schemas/Event"
          },
          "Milestone" : {
            "$ref" : "#/components/schemas/Milestone"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Class" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Class" ]
      },
      "PageCondition" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          }
        },
        "required" : [ "Condition" ]
      },
      "PageActivation" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          }
        },
        "required" : [ "Condition" ]
      },
      "Part" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "BlockName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ContactType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DocIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "DropID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Location" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "LotID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Metadata" : {
            "$ref" : "#/components/schemas/regExp"
          },
          "Option" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PageNumber" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "PartVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PreviewType" : {
            "type" : "string",
            "enum" : [ "Animation", "Identification", "SeparatedThumbNail", "Separation", "SeparationRaw", "Static3D", "ThumbNail", "Viewable" ]
          },
          "PrintCondition" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Product" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductPart" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QualityMeasurement" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Run" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RunIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SetIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "SheetIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "SheetName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Side" : {
            "$ref" : "#/components/schemas/Side"
          },
          "StationName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TileID" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "TransferCurveName" : {
            "type" : "string",
            "enum" : [ "Film", "Plate", "Press", "Substrate", "Proof" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "WebName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "PDFInterpretingParams" : {
        "type" : "object",
        "properties" : {
          "OCGControl" : {
            "$ref" : "#/components/schemas/OCGControl"
          },
          "ReferenceXObjParams" : {
            "$ref" : "#/components/schemas/ReferenceXObjParams"
          },
          "EmitPDFBG" : {
            "type" : "boolean"
          },
          "EmitPDFHalftones" : {
            "type" : "boolean"
          },
          "EmitPDFTransfers" : {
            "type" : "boolean"
          },
          "EmitPDFUCR" : {
            "type" : "boolean"
          },
          "HonorPDFOverprint" : {
            "type" : "boolean"
          },
          "ICCColorAsDeviceColor" : {
            "type" : "boolean"
          },
          "OCGIntent" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "OCGProcess" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "OCGZoom" : {
            "type" : "number",
            "format" : "float"
          },
          "PrintPDFAnnotations" : {
            "type" : "boolean"
          },
          "PrintTrapAnnotations" : {
            "type" : "boolean"
          },
          "TransparencyRenderingQuality" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "AuditStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          },
          "required" : [ "DeviceInfo" ]
        } ]
      },
      "AuditProcessRun" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "ProcessRun" : {
              "$ref" : "#/components/schemas/ProcessRun"
            }
          },
          "required" : [ "ProcessRun" ]
        } ]
      },
      "ProcessRun" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Duration" : {
            "type" : "string",
            "format" : "duration"
          },
          "End" : {
            "type" : "string",
            "format" : "date-time"
          },
          "EndStatus" : {
            "type" : "string",
            "enum" : [ "Aborted", "Completed" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ReturnTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Start" : {
            "type" : "string",
            "format" : "date-time"
          },
          "SubmissionTime" : {
            "type" : "string",
            "format" : "date-time"
          }
        },
        "required" : [ "End", "EndStatus", "Start" ]
      },
      "RefAnchor" : {
        "type" : "object",
        "properties" : {
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "AnchorType" : {
            "type" : "string",
            "enum" : [ "Parent", "Sibling" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "rRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          }
        },
        "required" : [ "Anchor", "AnchorType", "rRef" ]
      },
      "RegisterRibbon" : {
        "type" : "object",
        "properties" : {
          "LengthOverall" : {
            "type" : "number",
            "format" : "float"
          },
          "Material" : {
            "type" : "string"
          },
          "RibbonColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "RibbonColorDetails" : {
            "type" : "string"
          },
          "RibbonEnd" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "VisibleLength" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "AuditResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "$ref" : "#/components/schemas/ResourceInfo"
            }
          },
          "required" : [ "ResourceInfo" ]
        } ]
      },
      "SoftCoverBinding" : {
        "type" : "object",
        "properties" : {
          "BlockThreadSewing" : {
            "type" : "boolean"
          },
          "EndSheets" : {
            "type" : "boolean"
          },
          "FoldingWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "FoldingWidthBack" : {
            "type" : "number",
            "format" : "float"
          },
          "GlueProcedure" : {
            "type" : "string",
            "enum" : [ "Spine", "SideOnly", "SingleSide", "SideSpine" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Scoring" : {
            "type" : "string",
            "enum" : [ "TwiceScored", "QuadScored", "None" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SpineGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          },
          "SpineOperations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "Tabs" : {
        "type" : "object",
        "properties" : {
          "ReinforceTabs" : {
            "type" : "boolean"
          },
          "ReinforceBind" : {
            "type" : "boolean"
          },
          "ReinforceColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "ReinforceColorDetails" : {
            "type" : "string"
          },
          "TabBrand" : {
            "type" : "string"
          },
          "TabCount" : {
            "type" : "integer"
          },
          "TabsPerBank" : {
            "type" : "integer"
          },
          "TabExtensionDistance" : {
            "type" : "number",
            "format" : "float"
          },
          "TabBodyCopy" : {
            "type" : "boolean"
          }
        }
      },
      "Module" : {
        "type" : "object",
        "properties" : {
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Manufacturer" : {
            "type" : "string"
          },
          "ManufacturerURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ModuleType" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Revision" : {
            "type" : "string"
          },
          "SerialNumber" : {
            "type" : "string"
          }
        },
        "required" : [ "ModuleID" ]
      },
      "AdhesiveNote" : {
        "type" : "object",
        "properties" : {
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          }
        }
      },
      "LooseBinding" : {
        "type" : "object",
        "properties" : {
          "HolePattern" : {
            "$ref" : "#/components/schemas/HolePattern"
          },
          "CoilBinding" : {
            "$ref" : "#/components/schemas/CoilBinding"
          },
          "CombBinding" : {
            "$ref" : "#/components/schemas/CombBinding"
          },
          "RingBinding" : {
            "$ref" : "#/components/schemas/RingBinding"
          },
          "Brand" : {
            "type" : "string"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "CoilBinding" : {
        "type" : "object",
        "properties" : {
          "CoilShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Material" : {
            "type" : "string",
            "enum" : [ "Steel", "ColorCoatedSteel", "Plastic" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "CombBinding" : {
        "type" : "object",
        "properties" : {
          "CombShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Material" : {
            "type" : "string",
            "enum" : [ "Steel", "ColorCoatedSteel", "Plastic" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "RingBinding" : {
        "type" : "object",
        "properties" : {
          "BinderMaterial" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RingShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RivetsExposed" : {
            "type" : "boolean"
          },
          "ViewBinder" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "AssemblyItem" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "BindIn" : {
        "type" : "object",
        "properties" : {
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          },
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Folio" : {
            "type" : "integer"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "BlowIn" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "FolioFrom" : {
            "type" : "integer"
          },
          "FolioTo" : {
            "type" : "integer"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "StickOn" : {
        "type" : "object",
        "properties" : {
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          },
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Folio" : {
            "type" : "integer"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "Certification" : {
        "type" : "object",
        "properties" : {
          "Claim" : {
            "type" : "string"
          },
          "Identifier" : {
            "type" : "string"
          },
          "Organization" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "PreflightItem" : {
        "type" : "object",
        "properties" : {
          "PreflightLevel" : {
            "type" : "string",
            "enum" : [ "Basic", "Extended", "Premium" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ShapeCut" : {
        "type" : "object",
        "properties" : {
          "CutBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "CutDepth" : {
            "type" : "string",
            "enum" : [ "Full", "Partial" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CutOut" : {
            "type" : "boolean"
          },
          "CutPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "CutType" : {
            "type" : "string",
            "enum" : [ "Cut", "Perforate" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ShapeType" : {
            "type" : "string",
            "enum" : [ "Line", "Path", "Rectangular", "Round", "RoundedRectangle" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ShapeTypeDetails" : {
            "type" : "string"
          }
        },
        "required" : [ "ShapeType" ]
      },
      "Address" : {
        "type" : "object",
        "properties" : {
          "AddressLine" : {
            "$ref" : "#/components/schemas/AddressLine"
          },
          "AddressUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "City" : {
            "type" : "string"
          },
          "CivicNumber" : {
            "type" : "string"
          },
          "Country" : {
            "type" : "string"
          },
          "CountryCode" : {
            "type" : "string",
            "pattern" : "[A-Z][A-Z]"
          },
          "ExtendedAddress" : {
            "type" : "string"
          },
          "PostalCode" : {
            "type" : "string"
          },
          "PostBox" : {
            "type" : "string"
          },
          "Region" : {
            "type" : "string"
          },
          "Street" : {
            "type" : "string"
          }
        }
      },
      "AddressLine" : {
        "type" : "object"
      },
      "AdvancedParams" : {
        "type" : "object",
        "properties" : {
          "AllowPSXObjects" : {
            "type" : "boolean"
          },
          "AllowTransparency" : {
            "type" : "boolean"
          },
          "AutoPositionEPSInfo" : {
            "type" : "boolean"
          },
          "EmbedJobOptions" : {
            "type" : "boolean"
          },
          "EmitDSCWarnings" : {
            "type" : "boolean"
          },
          "LockDistillerParams" : {
            "type" : "boolean"
          },
          "ParseDSCCommentForDocInfo" : {
            "type" : "boolean"
          },
          "ParseDSCComments" : {
            "type" : "boolean"
          },
          "PassThroughJPEGImages" : {
            "type" : "boolean"
          },
          "PreserveCopyPage" : {
            "type" : "boolean"
          },
          "PreserveEPSInfo" : {
            "type" : "boolean"
          },
          "PreserveHalftoneInfo" : {
            "type" : "boolean"
          },
          "PreserveOPIComments" : {
            "type" : "boolean"
          },
          "PreserveOverprintSettings" : {
            "type" : "boolean"
          },
          "TransferFunctionInfo" : {
            "type" : "string",
            "enum" : [ "Preserve", "Remove", "Apply" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "UCRandBGInfo" : {
            "type" : "string",
            "enum" : [ "Preserve", "Remove" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "UsePrologue" : {
            "type" : "boolean"
          }
        }
      },
      "ApprovalPerson" : {
        "type" : "object",
        "properties" : {
          "ApprovalRole" : {
            "type" : "string",
            "enum" : [ "Approvinator", "Informative", "Obligated" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ApprovalRoleDetails" : {
            "type" : "string"
          },
          "ContactRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          }
        },
        "required" : [ "ContactRef" ]
      },
      "AssemblySection" : {
        "type" : "object",
        "properties" : {
          "AssemblySection" : {
            "$ref" : "#/components/schemas/AssemblySection"
          },
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CommonFolds" : {
            "type" : "integer",
            "minimum" : 2
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "BinderySignatureID" ]
      },
      "AutomatedOverPrintParams" : {
        "type" : "object",
        "properties" : {
          "KnockOutCMYKWhite" : {
            "type" : "boolean"
          },
          "LineArtBlackLevel" : {
            "type" : "number",
            "format" : "float"
          },
          "OverPrintBlackLineArt" : {
            "type" : "boolean"
          },
          "OverPrintBlackText" : {
            "type" : "boolean"
          },
          "TextBlackLevel" : {
            "type" : "number",
            "format" : "float"
          },
          "TextSizeThreshold" : {
            "type" : "integer"
          }
        }
      },
      "BarcodeDetails" : {
        "type" : "object",
        "properties" : {
          "BarcodeVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ErrorCorrectionLevel" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "XCells" : {
            "type" : "integer"
          },
          "YCells" : {
            "type" : "integer"
          }
        }
      },
      "BarcodeProductionParams" : {
        "type" : "object",
        "properties" : {
          "BarcodeReproParams" : {
            "$ref" : "#/components/schemas/BarcodeReproParams"
          },
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          }
        }
      },
      "BindingQuality" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "BindingQualityParams" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "BoxFoldAction" : {
        "type" : "object",
        "properties" : {
          "Action" : {
            "type" : "string",
            "enum" : [ "LongFoldLeftToRight", "LongFoldRightToLeft", "LongPreFoldLeftToRight", "LongPreFoldRightToLeft", "FrontFoldComplete", "FrontFoldDiagonal", "FrontFoldCompleteDiagonal", "BackFoldComplete", "BackFoldDiagonal", "BackFoldCompleteDiagonal", "ReverseFold", "Milling", "Rotate90", "Rotate180", "Rotate270" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FoldIndex" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Action", "FoldIndex" ]
      },
      "ByteMap" : {
        "type" : "object",
        "properties" : {
          "Band" : {
            "$ref" : "#/components/schemas/Band"
          },
          "BandOrdering" : {
            "type" : "string",
            "enum" : [ "BandMajor", "ColorMajor" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FrameHeight" : {
            "type" : "integer"
          },
          "FrameWidth" : {
            "type" : "integer"
          },
          "Halftoned" : {
            "type" : "boolean"
          },
          "Interleaved" : {
            "type" : "boolean"
          },
          "PixelColorants" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "PixelDepth" : {
            "type" : "integer"
          },
          "PixelSkip" : {
            "type" : "integer"
          },
          "Resolution" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "CCITTFaxParams" : {
        "type" : "object",
        "properties" : {
          "EncodedByteAlign" : {
            "type" : "boolean"
          },
          "EndOfBlock" : {
            "type" : "boolean"
          },
          "EndOfLine" : {
            "type" : "boolean"
          },
          "K" : {
            "type" : "integer"
          },
          "Uncompressed" : {
            "type" : "boolean"
          }
        }
      },
      "CIELABMeasuringField" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "CIELab" : {
            "$ref" : "#/components/schemas/LabColor"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "Percentages" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "ScreenRuling" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "ScreenShape" : {
            "type" : "string"
          },
          "Tolerance" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Center", "CIELab" ]
      },
      "CollatingItem" : {
        "type" : "object",
        "properties" : {
          "Amount" : {
            "type" : "integer"
          },
          "ComponentRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Transformation" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "TransformationContext" : {
            "type" : "string",
            "enum" : [ "CollateItem", "Component", "StackItem" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ColorantAlias" : {
        "type" : "object",
        "properties" : {
          "ColorantName" : {
            "type" : "string"
          },
          "RawName" : {
            "type" : "string"
          },
          "ReplacementColorantName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "ColorantName", "ReplacementColorantName" ]
      },
      "ColorControlStrip" : {
        "type" : "object",
        "properties" : {
          "CIELABMeasuringField" : {
            "$ref" : "#/components/schemas/CIELABMeasuringField"
          },
          "ColorMeasurementConditions" : {
            "$ref" : "#/components/schemas/ColorMeasurementConditions"
          },
          "DensityMeasuringField" : {
            "$ref" : "#/components/schemas/DensityMeasuringField"
          },
          "Patch" : {
            "$ref" : "#/components/schemas/Patch"
          },
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Rotation" : {
            "type" : "number",
            "format" : "float"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "StripType" : {
            "type" : "string"
          }
        }
      },
      "ColorMeasurement" : {
        "type" : "object",
        "properties" : {
          "ColorControlStrip" : {
            "$ref" : "#/components/schemas/ColorControlStrip"
          }
        }
      },
      "ColorMeasurementConditions" : {
        "type" : "object",
        "properties" : {
          "Aperture" : {
            "type" : "number",
            "format" : "float"
          },
          "DensityStandard" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Illumination" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "IlluminationAngle" : {
            "type" : "integer"
          },
          "InkState" : {
            "type" : "string",
            "enum" : [ "Dry", "Wet" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MeasurementAngle" : {
            "type" : "integer"
          },
          "MeasurementFilter" : {
            "type" : "string",
            "enum" : [ "None", "Pol", "UV" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MeasurementMode" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Observer" : {
            "type" : "integer"
          },
          "SampleBacking" : {
            "type" : "string",
            "enum" : [ "Black", "Substrate", "White" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SpectralResolution" : {
            "type" : "number",
            "format" : "float"
          },
          "WhiteBase" : {
            "type" : "string",
            "enum" : [ "Absolute", "Substrate" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ComChannel" : {
        "type" : "object",
        "properties" : {
          "ChannelType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ChannelUsage" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Locator" : {
            "type" : "string"
          }
        },
        "required" : [ "ChannelType", "Locator" ]
      },
      "Company" : {
        "type" : "object",
        "properties" : {
          "OrganizationalUnit" : {
            "$ref" : "#/components/schemas/textElement"
          },
          "CompanyID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "OrganizationName" : {
            "type" : "string"
          }
        },
        "required" : [ "OrganizationName" ]
      },
      "ContentMetadata" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "ContactRefs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            }
          },
          "ISBN" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Title" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ContentObject" : {
        "type" : "object"
      },
      "ConvertingConfig" : {
        "type" : "object",
        "properties" : {
          "CutBlock" : {
            "$ref" : "#/components/schemas/CutBlock"
          },
          "Device" : {
            "$ref" : "#/components/schemas/Device"
          },
          "Media" : {
            "$ref" : "#/components/schemas/Media"
          },
          "MarginBottom" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginLeft" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginRight" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginTop" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetHeightMax" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetHeightMin" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetWidthMax" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetWidthMin" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "CutBlock" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "BlockName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Box" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "CutWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Operations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "BlockName" ]
      },
      "DCTParams" : {
        "type" : "object",
        "properties" : {
          "ColorTransform" : {
            "type" : "string",
            "enum" : [ "None", "YUV", "Automatic" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "HSamples" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "HuffTable" : {
            "type" : "string"
          },
          "QFactor" : {
            "type" : "number",
            "format" : "float"
          },
          "QuantTable" : {
            "type" : "string"
          },
          "VSamples" : {
            "$ref" : "#/components/schemas/IntegerList"
          }
        }
      },
      "DensityMeasuringField" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Density" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "DotGain" : {
            "type" : "number",
            "format" : "float"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ToleranceBlack" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceCyan" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceDotGain" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceMagenta" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceYellow" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Center", "Density", "Diameter", "DotGain", "Separation" ]
      },
      "DeviceNColor" : {
        "type" : "object",
        "properties" : {
          "ColorList" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "ColorList", "Name" ]
      },
      "DeviceNSpace" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "Name", "Separations" ]
      },
      "Disjointing" : {
        "type" : "object",
        "properties" : {
          "InsertSheet" : {
            "$ref" : "#/components/schemas/InsertSheet"
          },
          "Amount" : {
            "type" : "integer"
          },
          "Direction" : {
            "type" : "string",
            "enum" : [ "Alternate", "Left", "None", "Right" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Units" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "Disposition" : {
        "type" : "object",
        "properties" : {
          "DispositionAction" : {
            "type" : "string",
            "enum" : [ "Delete", "Archive" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ExtraDuration" : {
            "type" : "string",
            "format" : "duration"
          },
          "MinDuration" : {
            "type" : "string",
            "format" : "duration"
          },
          "Priority" : {
            "type" : "integer"
          },
          "Until" : {
            "type" : "string",
            "format" : "date-time"
          }
        }
      },
      "DropItem" : {
        "type" : "object",
        "properties" : {
          "Amount" : {
            "type" : "integer"
          },
          "ItemRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "TotalDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "TotalVolume" : {
            "type" : "number",
            "format" : "float"
          },
          "TotalWeight" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Amount", "ItemRef" ]
      },
      "Expr" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Path" : {
            "$ref" : "#/components/schemas/XPath"
          }
        },
        "required" : [ "Name", "Path" ]
      },
      "ExtraValues" : {
        "type" : "object",
        "properties" : {
          "Usage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Value" : {
            "type" : "string"
          }
        },
        "required" : [ "Usage", "Value" ]
      },
      "Feeder" : {
        "type" : "object",
        "properties" : {
          "FeederQualityParams" : {
            "$ref" : "#/components/schemas/FeederQualityParams"
          },
          "AlternatePositions" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "ComponentRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "FeederSynchronization" : {
            "type" : "string",
            "enum" : [ "Alternate", "Backup", "Chain", "Primary" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FeederType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Loading" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Opening" : {
            "type" : "string",
            "enum" : [ "Back", "Front", "None", "Sucker" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Position" : {
            "type" : "integer"
          }
        }
      },
      "FeederQualityParams" : {
        "type" : "object",
        "properties" : {
          "BadFeedQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "BadFeeds" : {
            "type" : "integer"
          },
          "DoubleFeedQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "DoubleFeeds" : {
            "type" : "integer"
          },
          "IncorrectComponentQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "IncorrectComponents" : {
            "type" : "integer"
          }
        }
      },
      "FileSpec" : {
        "type" : "object",
        "properties" : {
          "Disposition" : {
            "$ref" : "#/components/schemas/Disposition"
          },
          "NetworkHeader" : {
            "$ref" : "#/components/schemas/NetworkHeader"
          },
          "CheckSum" : {
            "type" : "string"
          },
          "Encoding" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FileFormat" : {
            "type" : "string"
          },
          "FileSize" : {
            "type" : "integer",
            "format" : "int64"
          },
          "FileTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "MimeType" : {
            "type" : "string"
          },
          "OverwritePolicy" : {
            "type" : "string",
            "enum" : [ "Overwrite", "RenameNew", "RenameOld", "NewVersion", "OperatorIntervention", "Abort" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Password" : {
            "type" : "string"
          },
          "ResourceUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SearchDepth" : {
            "type" : "integer"
          },
          "UID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "UserFileName" : {
            "type" : "string"
          }
        }
      },
      "FlateParams" : {
        "type" : "object",
        "properties" : {
          "Predictor" : {
            "type" : "integer"
          }
        }
      },
      "FolderProduction" : {
        "type" : "object",
        "properties" : {
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductionType" : {
            "type" : "string",
            "enum" : [ "Collect", "NonCollect" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "GeneralID" : {
        "type" : "object",
        "properties" : {
          "DataType" : {
            "type" : "string",
            "enum" : [ "xs:string", "xs:int", "xs:float", "xs:NMTOKEN", "xs:boolean", "xs:dateTime", "xs:duration", "NamedFeature" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "IDUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "IDValue" : {
            "type" : "string"
          }
        },
        "required" : [ "IDUsage", "IDValue" ]
      },
      "IdentificationField" : {
        "type" : "object",
        "properties" : {
          "BarcodeDetails" : {
            "$ref" : "#/components/schemas/BarcodeDetails"
          },
          "ExtraValues" : {
            "$ref" : "#/components/schemas/ExtraValues"
          },
          "MetadataMap" : {
            "$ref" : "#/components/schemas/MetadataMap"
          },
          "BoundingBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "Encoding" : {
            "type" : "string",
            "enum" : [ "ASCII", "Barcode", "Braille", "RFID" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "EncodingDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Format" : {
            "$ref" : "#/components/schemas/regExp"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "Position" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Purpose" : {
            "type" : "string",
            "enum" : [ "Label", "Separation", "Verification" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PurposeDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Value" : {
            "type" : "string"
          },
          "ValueFormat" : {
            "type" : "string"
          },
          "ValueTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "ImageEnhancementOp" : {
        "type" : "object",
        "properties" : {
          "Operation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "OperationDetails" : {
            "type" : "string"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        },
        "required" : [ "Operation" ]
      },
      "InsertSheet" : {
        "type" : "object",
        "properties" : {
          "StripMark" : {
            "$ref" : "#/components/schemas/StripMark"
          },
          "IsWaste" : {
            "type" : "boolean"
          },
          "MediaRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "SheetFormat" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SheetType" : {
            "type" : "string",
            "enum" : [ "AccountingSheet", "ErrorSheet", "JobSheet", "SeparatorSheet" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SheetUsage" : {
            "type" : "string",
            "enum" : [ "Header", "Interleaved", "InterleavedBefore", "OnError", "Slip", "SlipCopy", "Trailer" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "SheetType", "SheetUsage" ]
      },
      "JBIG2Params" : {
        "type" : "object",
        "properties" : {
          "JBIG2Lossless" : {
            "type" : "boolean"
          }
        }
      },
      "JPEG2000Params" : {
        "type" : "object",
        "properties" : {
          "CodeBlockSize" : {
            "type" : "integer"
          },
          "LayerRates" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "LayersPerTile" : {
            "type" : "integer"
          },
          "NumResolutions" : {
            "type" : "integer"
          },
          "ProgressionOrder" : {
            "type" : "string",
            "enum" : [ "LRCP", "RLCP", "RPCL", "PCRL", "CPRL" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TileSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "PlacedObject" : {
        "type" : "object",
        "properties" : {
          "PageActivation" : {
            "$ref" : "#/components/schemas/PageActivation"
          },
          "PageCondition" : {
            "$ref" : "#/components/schemas/PageCondition"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "ClipBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "ClipPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "HalfTonePhaseOrigin" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Ord" : {
            "type" : "integer"
          },
          "PositionRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "SourceClipPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "TrimCTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "TrimSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "CTM" ]
      },
      "SheetActivation" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          }
        },
        "required" : [ "Condition" ]
      },
      "LZWParams" : {
        "type" : "object",
        "properties" : {
          "EarlyChange" : {
            "type" : "integer"
          },
          "Predictor" : {
            "type" : "integer"
          }
        }
      },
      "MediaLayers" : {
        "type" : "object"
      },
      "MetadataMap" : {
        "type" : "object",
        "properties" : {
          "Expr" : {
            "$ref" : "#/components/schemas/Expr"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ValueFormat" : {
            "type" : "string"
          },
          "ValueTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "Name", "ValueFormat", "ValueTemplate" ]
      },
      "MISDetails" : {
        "type" : "object",
        "properties" : {
          "Complexity" : {
            "type" : "number",
            "format" : "float"
          },
          "CostType" : {
            "type" : "string",
            "enum" : [ "Chargeable", "NonChargeable" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "WorkType" : {
            "type" : "string",
            "enum" : [ "Original", "Alteration", "Rework" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "WorkTypeDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "MultiPageFold" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          }
        },
        "required" : [ "BinderySignatureID", "Orientation" ]
      },
      "NetworkHeader" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string"
          },
          "Value" : {
            "type" : "string"
          }
        },
        "required" : [ "Name", "Value" ]
      },
      "NotificationFilter" : {
        "type" : "object",
        "properties" : {
          "Classes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "Event", "Information", "Warning", "Error", "Fatal" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "MilestoneTypes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "ObjectModel" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Dimensions" : {
            "$ref" : "#/components/schemas/shape"
          }
        }
      },
      "ObjectResolution" : {
        "type" : "object",
        "properties" : {
          "AntiAliasing" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Resolution" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        },
        "required" : [ "Resolution" ]
      },
      "OCGControl" : {
        "type" : "object",
        "properties" : {
          "IncludeOCG" : {
            "type" : "boolean"
          },
          "OCGName" : {
            "type" : "string"
          },
          "ProcStepsGroup" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProcStepsType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "IncludeOCG" ]
      },
      "Patch" : {
        "type" : "object",
        "properties" : {
          "SeparationTint" : {
            "$ref" : "#/components/schemas/SeparationTint"
          },
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Density" : {
            "type" : "number",
            "format" : "float"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Lab" : {
            "$ref" : "#/components/schemas/LabColor"
          },
          "NeutralDensity" : {
            "type" : "number",
            "format" : "float"
          },
          "PatchUsage" : {
            "type" : "string",
            "enum" : [ "Color", "Ignore", "Image", "Technical" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RGB" : {
            "$ref" : "#/components/schemas/sRGBColor"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Spectrum" : {
            "$ref" : "#/components/schemas/TransferFunction"
          }
        },
        "required" : [ "PatchUsage" ]
      },
      "PDFXParams" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "PDFXBleedBoxtoTrimBoxOffset" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "PDFXCheck" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "PDFXCompliantPDFOnly" : {
            "type" : "boolean"
          },
          "PDFXNoTrimBoxError" : {
            "type" : "boolean"
          },
          "PDFXSetBleedBoxToMediaBox" : {
            "type" : "boolean"
          },
          "PDFXTrapped" : {
            "type" : "string",
            "enum" : [ "Unknown", "false", "true" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PDFXTrimBoxToMediaBoxOffset" : {
            "$ref" : "#/components/schemas/rectangle"
          }
        }
      },
      "FontParams" : {
        "type" : "object",
        "properties" : {
          "AlwaysEmbed" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "EmbedAllFonts" : {
            "type" : "boolean"
          },
          "MaxSubsetPct" : {
            "type" : "integer"
          },
          "NeverEmbed" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "Perforate" : {
        "type" : "object",
        "properties" : {
          "Depth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "TeethPerDimension" : {
            "type" : "number",
            "format" : "float"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "Person" : {
        "type" : "object",
        "properties" : {
          "AdditionalNames" : {
            "type" : "string"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "FamilyName" : {
            "type" : "string"
          },
          "FirstName" : {
            "type" : "string"
          },
          "JobTitle" : {
            "type" : "string"
          },
          "Languages" : {
            "$ref" : "#/components/schemas/languages"
          },
          "NamePrefix" : {
            "type" : "string"
          },
          "NameSuffix" : {
            "type" : "string"
          },
          "PhoneticFirstName" : {
            "type" : "string"
          },
          "PhoneticLastName" : {
            "type" : "string"
          }
        }
      },
      "Position" : {
        "type" : "object",
        "properties" : {
          "AbsoluteBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "BlockName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GangElementID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "MarginBottom" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginLeft" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginRight" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginTop" : {
            "type" : "number",
            "format" : "float"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "PositionOrd" : {
            "type" : "integer"
          },
          "RelativeBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "StackDepth" : {
            "type" : "integer"
          },
          "StackOrd" : {
            "type" : "integer"
          }
        }
      },
      "PositionObj" : {
        "type" : "object",
        "properties" : {
          "RefAnchor" : {
            "$ref" : "#/components/schemas/RefAnchor"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "PageRange" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "PositionPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "RelativeSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "RotationPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "SizePolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          }
        }
      },
      "PreflightTest" : {
        "type" : "object",
        "properties" : {
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Action" : {
            "$ref" : "#/components/schemas/EnumPreflightAction"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "TestClass" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TestID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "PreflightCheck" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Action" : {
            "$ref" : "#/components/schemas/EnumPreflightAction"
          },
          "Count" : {
            "type" : "integer"
          },
          "Pages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "TestClass" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TestID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ProductionPath" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ProductionPathID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "BindingQualityMeasurement" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ReferenceXObjParams" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Mode" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Mode" ]
      },
      "Inspection" : {
        "type" : "object",
        "properties" : {
          "Defect" : {
            "$ref" : "#/components/schemas/Defect"
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          }
        }
      },
      "Defect" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Box" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "DefectReason" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DefectType" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "FinishingDefect", "ImageDefect", "ImageFinishingDefect", "Other", "SheetDefect", "SubstrateDefect" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "DefectTypeDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Score"
          },
          "Size" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "DefectType" ]
      },
      "MarkElement" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "MarkType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Rotation" : {
            "type" : "number",
            "format" : "float"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Center", "MarkType", "Separation" ]
      },
      "RegistrationQuality" : {
        "type" : "object",
        "properties" : {
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Reference" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Offset", "Reference" ]
      },
      "RepeatDesc" : {
        "type" : "object",
        "properties" : {
          "AllowedRotate" : {
            "type" : "string",
            "enum" : [ "None", "Grain", "MinorGrain", "CrossGrain" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GutterX" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterX2" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterY" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterY2" : {
            "type" : "number",
            "format" : "float"
          },
          "LayoutStyle" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "OrderQuantity" : {
            "type" : "integer"
          },
          "ShapeDefRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "UseBleed" : {
            "type" : "boolean"
          }
        },
        "required" : [ "ShapeDefRef" ]
      },
      "RuleLength" : {
        "type" : "object",
        "properties" : {
          "DDESCutType" : {
            "type" : "integer"
          },
          "Length" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "DDESCutType", "Length" ]
      },
      "ScreenSelector" : {
        "type" : "object",
        "properties" : {
          "Angle" : {
            "type" : "number",
            "format" : "float"
          },
          "DotSize" : {
            "type" : "number",
            "format" : "float"
          },
          "Frequency" : {
            "type" : "number",
            "format" : "float"
          },
          "ScreeningFamily" : {
            "type" : "string"
          },
          "ScreeningType" : {
            "type" : "string",
            "enum" : [ "Adaptive", "AM", "ErrorDiffusion", "FM", "HybridAM-FM", "HybridAMline-dot" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SourceFrequencyMax" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceFrequencyMin" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          },
          "SpotFunction" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ShapeTemplate" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "ShapeDimension" : {
            "$ref" : "#/components/schemas/ShapeDimension"
          },
          "InnerDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Standard" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ShapeDimension" : {
        "type" : "object",
        "properties" : {
          "Usage" : {
            "type" : "string"
          },
          "Value" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Usage", "Value" ]
      },
      "GangElement" : {
        "type" : "object",
        "properties" : {
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Media" : {
            "$ref" : "#/components/schemas/Media"
          },
          "RunList" : {
            "$ref" : "#/components/schemas/RunList"
          },
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "CollapseBleeds" : {
            "type" : "boolean"
          },
          "CustomerID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DeliveryDate" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Dimension" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "DueDate" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FillPriority" : {
            "type" : "integer"
          },
          "GangElementID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GrainDirection" : {
            "$ref" : "#/components/schemas/MediaDirection"
          },
          "GroupCode" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MaxQuantity" : {
            "type" : "integer"
          },
          "MediaRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "MinQuantity" : {
            "type" : "integer"
          },
          "NPage" : {
            "type" : "integer"
          },
          "NumberUp" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "OneSheet" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Operations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "OrderQuantity" : {
            "type" : "integer"
          },
          "PageDimension" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "PlacedQuantity" : {
            "type" : "integer"
          },
          "Priority" : {
            "type" : "integer"
          },
          "RotationPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "RunListRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "SeparationListBack" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "SeparationListFront" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "GangElementID", "OrderQuantity" ]
      },
      "SeparationTint" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Tint" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Name", "Tint" ]
      },
      "ShiftPoint" : {
        "type" : "object",
        "properties" : {
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "CTM", "Position" ]
      },
      "SignatureCell" : {
        "type" : "object",
        "properties" : {
          "CellCondition" : {
            "$ref" : "#/components/schemas/CellCondition"
          },
          "BackPages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "BackSpread" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "BleedFace" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedFoot" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedHead" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedSpine" : {
            "type" : "number",
            "format" : "float"
          },
          "FaceCells" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "FrontPages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "FrontSpread" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Mask" : {
            "type" : "string",
            "enum" : [ "BleedBox", "DieCut", "None", "PDL", "SourceBleedBox", "SourceTrimBox", "TrimBox" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MaskBleed" : {
            "type" : "number",
            "format" : "float"
          },
          "MaskSeparation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Orientation" : {
            "type" : "string",
            "enum" : [ "Down", "Left", "Right", "Up" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Sides" : {
            "$ref" : "#/components/schemas/Sides"
          },
          "StationName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TrimFace" : {
            "type" : "number",
            "format" : "float"
          },
          "TrimFoot" : {
            "type" : "number",
            "format" : "float"
          },
          "TrimHead" : {
            "type" : "number",
            "format" : "float"
          },
          "TrimSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "Station" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "ShapeDefRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "StationName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "StationName" ]
      },
      "StripMark" : {
        "type" : "object",
        "properties" : {
          "BarcodeReproParams" : {
            "$ref" : "#/components/schemas/BarcodeReproParams"
          },
          "FillMark" : {
            "$ref" : "#/components/schemas/FillMark"
          },
          "ColorControlStrip" : {
            "$ref" : "#/components/schemas/ColorControlStrip"
          },
          "CutMark" : {
            "$ref" : "#/components/schemas/CutMark"
          },
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          },
          "JobField" : {
            "$ref" : "#/components/schemas/JobField"
          },
          "RefAnchor" : {
            "$ref" : "#/components/schemas/RefAnchor"
          },
          "RegisterMark" : {
            "$ref" : "#/components/schemas/RegisterMark"
          },
          "ScavengerArea" : {
            "$ref" : "#/components/schemas/ScavengerArea"
          },
          "AbsoluteHeight" : {
            "type" : "number",
            "format" : "float"
          },
          "AbsoluteWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "Font" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FontSize" : {
            "type" : "number",
            "format" : "float"
          },
          "HorizontalFitPolicy" : {
            "$ref" : "#/components/schemas/EnumFitPolicy"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "MarkName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "RelativeHeight" : {
            "type" : "number",
            "format" : "float"
          },
          "RelativeWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "StripMarkDetails" : {
            "type" : "string"
          },
          "VerticalFitPolicy" : {
            "$ref" : "#/components/schemas/EnumFitPolicy"
          }
        }
      },
      "TabDimensions" : {
        "type" : "object",
        "properties" : {
          "TabEdge" : {
            "$ref" : "#/components/schemas/Edge"
          },
          "TabExtensionDistance" : {
            "type" : "number",
            "format" : "float"
          },
          "TabOffset" : {
            "type" : "number",
            "format" : "float"
          },
          "TabSetCollationOrder" : {
            "type" : "string",
            "enum" : [ "Forward", "Reverse" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TabsPerBank" : {
            "type" : "integer"
          },
          "TabWidth" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ThinPDFParams" : {
        "type" : "object",
        "properties" : {
          "FilePerPage" : {
            "type" : "boolean"
          },
          "SidelineEPS" : {
            "type" : "boolean"
          },
          "SidelineFonts" : {
            "type" : "boolean"
          },
          "SidelineImages" : {
            "type" : "boolean"
          }
        }
      },
      "TIFFEmbeddedFile" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "TagNumber" : {
            "type" : "integer"
          },
          "TagType" : {
            "type" : "integer"
          }
        },
        "required" : [ "FileSpec", "TagNumber", "TagType" ]
      },
      "TIFFFormatParams" : {
        "type" : "object",
        "properties" : {
          "TIFFEmbeddedFile" : {
            "$ref" : "#/components/schemas/TIFFEmbeddedFile"
          },
          "TIFFtag" : {
            "$ref" : "#/components/schemas/TIFFtag"
          },
          "ByteOrder" : {
            "type" : "string",
            "enum" : [ "II", "MM" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Interleaving" : {
            "type" : "integer"
          },
          "RowsPerStrip" : {
            "type" : "integer"
          },
          "Segmentation" : {
            "type" : "string",
            "enum" : [ "SingleStrip", "Stripped", "Tiled" ]
          },
          "SeparationNameTag" : {
            "type" : "integer"
          },
          "TileSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WhiteIsZero" : {
            "type" : "boolean"
          }
        }
      },
      "TIFFtag" : {
        "type" : "object",
        "properties" : {
          "BinaryValue" : {
            "type" : "string"
          },
          "IntegerValue" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "NumberValue" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "StringValue" : {
            "type" : "string"
          },
          "TagNumber" : {
            "type" : "integer"
          },
          "TagType" : {
            "type" : "integer"
          }
        },
        "required" : [ "TagNumber", "TagType" ]
      },
      "ChannelBindingDetails" : {
        "type" : "object",
        "properties" : {
          "ClampD" : {
            "type" : "number",
            "format" : "float"
          },
          "ClampSize" : {
            "$ref" : "#/components/schemas/shape"
          },
          "Cover" : {
            "type" : "boolean"
          }
        }
      },
      "Crease" : {
        "type" : "object",
        "properties" : {
          "Depth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "Cut" : {
        "type" : "object",
        "properties" : {
          "CutWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "CutMark" : {
        "type" : "object",
        "properties" : {
          "MarkType" : {
            "type" : "string",
            "enum" : [ "CrossCutMark", "TopVerticalCutMark", "BottomVerticalCutMark", "LeftHorizontalCutMark", "RightHorizontalCutMark", "LowerLeftCutMark", "UpperLeftCutMark", "LowerRightCutMark", "UpperRightCutMark" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "MarkType", "Position" ]
      },
      "Fold" : {
        "type" : "object",
        "properties" : {
          "From" : {
            "type" : "string",
            "enum" : [ "Front", "Left" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "To" : {
            "type" : "string",
            "enum" : [ "Up", "Down" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Travel" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "From", "To" ]
      },
      "Glue" : {
        "type" : "object",
        "properties" : {
          "AreaGlue" : {
            "type" : "boolean"
          },
          "GlueLineWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "GlueRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "GlueType" : {
            "type" : "string",
            "enum" : [ "ColdGlue", "Hotmelt", "Permanent", "PUR", "Removable" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GluingPattern" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "GluingTechnique" : {
            "type" : "string",
            "enum" : [ "SpineGluing", "SideGluingFront", "SideGluingBack" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MeltingTemperature" : {
            "type" : "integer"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/Face"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "HolePattern" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "CenterReference" : {
            "type" : "string",
            "enum" : [ "RegistrationMark", "TrailingEdge" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Extent" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "HoleCount" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Pattern" : {
            "type" : "string",
            "enum" : [ "None", "S1-generic", "S-generic", "R2-generic", "R2m-DIN", "R2m-ISO", "R2m-MIB", "R2i-US-a", "R2i-US-b", "R3-generic", "R3i-US", "R4-generic", "R4m-DIN-A4", "R4m-DIN-A5", "R4m-swedish", "R4i-US", "R5-generic", "R5i-US-a", "R5i-US-b", "R5i-US-c", "R6-generic", "R6m-4h2s", "R6m-DIN-A5", "R7-generic", "R7i-US-a", "R7i-US-b", "R7i-US-c", "R11m-7h4s", "P16_9i-rect-0t", "P12m-rect-0t", "W2_1i-round-0t", "W2_1i-square-0t", "W3_1i-square-0t", "C9.5m-round-0t" ]
          },
          "Pitch" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ReferenceEdge" : {
            "type" : "string",
            "enum" : [ "Bottom", "Left", "Pattern", "Right", "Top" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Reinforcement" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Shape" : {
            "type" : "string",
            "enum" : [ "Elliptic", "Rectangular", "Round" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "CombBindingDetails" : {
        "type" : "object",
        "properties" : {
          "CombShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "FlipBackCover" : {
            "type" : "boolean"
          }
        }
      },
      "RingBindingDetails" : {
        "type" : "object",
        "properties" : {
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "RingMechanic" : {
            "type" : "boolean"
          },
          "RingShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RivetsExposed" : {
            "type" : "boolean"
          },
          "SpineWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "ViewBinder" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "StripBindingDetails" : {
        "type" : "object",
        "properties" : {
          "Length" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "SaddleStitching" : {
        "type" : "object",
        "properties" : {
          "StapleShape" : {
            "$ref" : "#/components/schemas/StapleShape"
          },
          "StitchNumber" : {
            "type" : "integer"
          }
        }
      },
      "Score" : {
        "type" : "integer",
        "minimum" : 0,
        "maximum" : 100
      },
      "SideStitching" : {
        "type" : "object",
        "properties" : {
          "StapleShape" : {
            "$ref" : "#/components/schemas/StapleShape"
          },
          "StitchNumber" : {
            "type" : "integer"
          }
        }
      },
      "ColorCorrectionOp" : {
        "type" : "object",
        "properties" : {
          "AdjustContrast" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustHue" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustLightness" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustSaturation" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        }
      },
      "ColorSpaceConversionOp" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          },
          "ScreenSelector" : {
            "$ref" : "#/components/schemas/ScreenSelector"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Convert", "Tag", "Untag" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PreserveBlack" : {
            "type" : "boolean"
          },
          "RenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          },
          "RGBGray2Black" : {
            "type" : "boolean"
          },
          "RGBGray2BlackThreshold" : {
            "type" : "number",
            "format" : "float"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "SourceCS" : {
            "type" : "string",
            "enum" : [ "All", "CalGray", "Calibrated", "CalRGB", "CIEBased", "CMYK", "DeviceCMYK", "DeviceGray", "DeviceN", "DeviceRGB", "DevIndep", "Gray", "ICCBased", "ICCCMYK", "ICCGray", "ICCLAB", "ICCRGB", "Lab", "RGB", "Separation", "YUV" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          },
          "SourceRenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          }
        },
        "required" : [ "Operation" ]
      },
      "PSCreationDetails" : {
        "type" : "object",
        "properties" : {
          "BinaryOK" : {
            "type" : "boolean"
          },
          "BoundingBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "CenterCropBox" : {
            "type" : "boolean"
          },
          "GeneratePageStreams" : {
            "type" : "boolean"
          },
          "IgnoreAnnotForms" : {
            "type" : "boolean"
          },
          "IgnoreBG" : {
            "type" : "boolean"
          },
          "IgnoreColorSeps" : {
            "type" : "boolean"
          },
          "IgnoreDSC" : {
            "type" : "boolean"
          },
          "IgnoreExternStreamRef" : {
            "type" : "boolean"
          },
          "IgnoreHalftones" : {
            "type" : "boolean"
          },
          "IgnoreOverprint" : {
            "type" : "boolean"
          },
          "IgnorePageRotation" : {
            "type" : "boolean"
          },
          "IgnoreRawData" : {
            "type" : "boolean"
          },
          "IgnoreSeparableImagesOnly" : {
            "type" : "boolean"
          },
          "IgnoreShowPage" : {
            "type" : "boolean"
          },
          "IgnoreTransfers" : {
            "type" : "boolean"
          },
          "IgnoreTTFontsFirst" : {
            "type" : "boolean"
          },
          "IgnoreUCR" : {
            "type" : "boolean"
          },
          "IncludeBaseFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeCIDFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeEmbeddedFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeOtherResources" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeProcSets" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeTrueTypeFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeType1Fonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeType3Fonts" : {
            "type" : "string",
            "enum" : [ "IncludeOncePerPage" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "OutputType" : {
            "type" : "string",
            "enum" : [ "EPS", "PostScript" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PSLevel" : {
            "type" : "integer"
          },
          "Scale" : {
            "type" : "number",
            "format" : "float"
          },
          "SetPageSize" : {
            "type" : "boolean"
          },
          "SetupProcsets" : {
            "type" : "boolean"
          },
          "ShrinkToFit" : {
            "type" : "boolean"
          },
          "SuppressCenter" : {
            "type" : "boolean"
          },
          "SuppressRotate" : {
            "type" : "boolean"
          },
          "TTasT42" : {
            "type" : "boolean"
          },
          "UseFontAliasNames" : {
            "type" : "boolean"
          }
        }
      },
      "PDFCreationDetails" : {
        "type" : "object",
        "properties" : {
          "AdvancedParams" : {
            "$ref" : "#/components/schemas/AdvancedParams"
          },
          "PDFXParams" : {
            "$ref" : "#/components/schemas/PDFXParams"
          },
          "ThinPDFParams" : {
            "$ref" : "#/components/schemas/ThinPDFParams"
          },
          "AllowJBIG2Globals" : {
            "type" : "boolean"
          },
          "ASCII85EncodePages" : {
            "type" : "boolean"
          },
          "AutoRotatePages" : {
            "type" : "string",
            "enum" : [ "None", "All", "PageByPage" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Binding" : {
            "type" : "string",
            "enum" : [ "Left", "Right" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CompressPages" : {
            "type" : "boolean"
          },
          "DefaultRenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          },
          "DetectBlend" : {
            "type" : "boolean"
          },
          "DoThumbnails" : {
            "type" : "boolean"
          },
          "InitialPageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "InitialResolution" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Optimize" : {
            "type" : "boolean"
          },
          "OverPrintMode" : {
            "type" : "integer"
          },
          "PDFVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ModifyQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "QueueFilter" : {
            "$ref" : "#/components/schemas/QueueFilter"
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "NextQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Abort", "Complete", "Hold", "Move", "Remove", "Resume", "SetGang", "Suspend" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Position" : {
            "type" : "integer"
          },
          "PrevQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Priority" : {
            "type" : "integer"
          }
        },
        "required" : [ "QueueFilter", "Operation" ]
      },
      "AuditNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            }
          },
          "required" : [ "Notification" ]
        } ]
      },
      "QueueStatusParams" : {
        "type" : "object",
        "properties" : {
          "QueueFilter" : {
            "$ref" : "#/components/schemas/QueueFilter"
          },
          "UpdateGranularity" : {
            "$ref" : "#/components/schemas/UpdateGranularity"
          }
        }
      },
      "GangSource" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Copies" : {
            "type" : "integer"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Copies", "JobID" ]
      },
      "SpecificResource" : {
        "type" : "object"
      },
      "ProductIntent" : {
        "type" : "object"
      },
      "CustomerInfo" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CustomerID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "CustomerJobName" : {
              "type" : "string"
            },
            "CustomerOrderID" : {
              "type" : "string"
            },
            "CustomerProjectID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "NodeInfo" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "GangSource" : {
              "$ref" : "#/components/schemas/GangSource"
            },
            "MISDetails" : {
              "$ref" : "#/components/schemas/MISDetails"
            },
            "CleanupDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "DueLevel" : {
              "type" : "string",
              "enum" : [ "Trivial", "Penalty", "JobCancelled" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "End" : {
              "type" : "string",
              "format" : "date-time"
            },
            "FirstEnd" : {
              "type" : "string",
              "format" : "date-time"
            },
            "FirstStart" : {
              "type" : "string",
              "format" : "date-time"
            },
            "JobPriority" : {
              "type" : "integer"
            },
            "LastEnd" : {
              "type" : "string",
              "format" : "date-time"
            },
            "LastStart" : {
              "type" : "string",
              "format" : "date-time"
            },
            "NaturalLang" : {
              "$ref" : "#/components/schemas/language"
            },
            "PersonalID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "SetupDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "Start" : {
              "type" : "string",
              "format" : "date-time"
            },
            "Status" : {
              "$ref" : "#/components/schemas/NodeStatus"
            },
            "StatusDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "TotalDuration" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "Shape" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "CutOut" : {
              "type" : "boolean"
            },
            "CutPath" : {
              "$ref" : "#/components/schemas/PDFPath"
            },
            "DDESCutType" : {
              "type" : "integer"
            },
            "ShapeDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "ShapeType" : {
              "type" : "string",
              "enum" : [ "Path", "Rectangular", "Round", "RoundedRectangle" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "TeethPerDimension" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "ShapeType" ]
        } ]
      },
      "Message" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          }
        },
        "required" : [ "Header" ]
      },
      "Command" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object"
        } ]
      },
      "Query" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "Subscription" : {
              "$ref" : "#/components/schemas/Subscription"
            }
          }
        } ]
      },
      "Response" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            },
            "ReturnCode" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Signal" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "ChannelMode" : {
              "$ref" : "#/components/schemas/EnumChannelMode"
            }
          }
        } ]
      },
      "Audit" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          }
        },
        "required" : [ "Header" ]
      },
      "BlockPreparationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "RegisterRibbon" : {
              "$ref" : "#/components/schemas/RegisterRibbon"
            },
            "Backing" : {
              "type" : "number",
              "format" : "float"
            },
            "Rounding" : {
              "type" : "number",
              "format" : "float"
            },
            "TightBacking" : {
              "$ref" : "#/components/schemas/TightBacking"
            }
          }
        } ]
      },
      "BoxPackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BoxType" : {
              "type" : "string",
              "enum" : [ "Box", "Carton", "Envelope", "Tube" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "BoxTypeDetails" : {
              "type" : "string"
            },
            "Columns" : {
              "type" : "integer"
            },
            "ComponentsPerRow" : {
              "type" : "integer"
            },
            "Copies" : {
              "type" : "integer"
            },
            "FaceDown" : {
              "$ref" : "#/components/schemas/Face"
            },
            "Layers" : {
              "type" : "integer"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Pattern" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Rows" : {
              "type" : "integer"
            },
            "Ties" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "UnderLays" : {
              "$ref" : "#/components/schemas/IntegerList"
            }
          },
          "required" : [ "BoxType" ]
        } ]
      },
      "Bundle" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BundleItem" : {
              "$ref" : "#/components/schemas/BundleItem"
            }
          },
          "required" : [ "BundleItem" ]
        } ]
      },
      "CaseMakingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "BottomFoldIn" : {
              "type" : "number",
              "format" : "float"
            },
            "CornerType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "CoverWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "FrontFoldIn" : {
              "type" : "number",
              "format" : "float"
            },
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "JointWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "SpineWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "TopFoldIn" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "CasingInParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "CaseRadius" : {
              "type" : "number",
              "format" : "float"
            },
            "CoverWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "SpineWidth" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "CoverApplicationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "Score" : {
              "$ref" : "#/components/schemas/Score"
            }
          }
        } ]
      },
      "CreasingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Crease" : {
              "$ref" : "#/components/schemas/Crease"
            }
          },
          "required" : [ "Crease" ]
        } ]
      },
      "CuttingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "DevelopingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PostBakeTemp" : {
              "type" : "number",
              "format" : "float"
            },
            "PostBakeTime" : {
              "type" : "string",
              "format" : "duration"
            },
            "PostExposeTime" : {
              "type" : "string",
              "format" : "duration"
            },
            "PreHeatTemp" : {
              "type" : "number",
              "format" : "float"
            },
            "PreHeatTime" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "Device" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "IconList" : {
              "$ref" : "#/components/schemas/IconList"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "Module" : {
              "$ref" : "#/components/schemas/Module"
            },
            "CostCenterID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "DescriptiveName" : {
              "type" : "string"
            },
            "DeviceClass" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "DeviceID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "DeviceType" : {
              "type" : "string"
            },
            "ICSVersions" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "JDFVersions" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "2.0" ]
              }
            },
            "KnownLocalizations" : {
              "$ref" : "#/components/schemas/languages"
            },
            "Manufacturer" : {
              "type" : "string"
            },
            "ManufacturerURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "MaxRunSpeed" : {
              "type" : "number",
              "format" : "float"
            },
            "Packaging" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "XML", "Zip" ]
              }
            },
            "PresentationURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "Revision" : {
              "type" : "string"
            },
            "SerialNumber" : {
              "type" : "string"
            },
            "URLSchemes" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "XJMFURL" : {
              "$ref" : "#/components/schemas/URL"
            }
          },
          "required" : [ "DeviceID" ]
        } ]
      },
      "EmbossingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Emboss" : {
              "$ref" : "#/components/schemas/Emboss"
            },
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "Emboss" ]
        } ]
      },
      "EndSheetGluingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            }
          },
          "required" : [ "Glue" ]
        } ]
      },
      "GluingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "GluingProductionID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "HeadBandApplicationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            },
            "Width" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "InsertingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "FinishedPage" : {
              "type" : "integer"
            },
            "InsertLocation" : {
              "type" : "string",
              "enum" : [ "Back", "FinishedPage", "Front", "Overfold" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Method" : {
              "type" : "string",
              "enum" : [ "BindIn", "BlowIn" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "InsertLocation" ]
        } ]
      },
      "InterpretingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "InterpretingDetails" : {
              "$ref" : "#/components/schemas/InterpretingDetails"
            },
            "ObjectResolution" : {
              "$ref" : "#/components/schemas/ObjectResolution"
            },
            "PDFInterpretingParams" : {
              "$ref" : "#/components/schemas/PDFInterpretingParams"
            },
            "Center" : {
              "type" : "boolean"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "PrintQuality" : {
              "$ref" : "#/components/schemas/PrintQuality"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "Scaling" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "ScalingOrigin" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "JacketingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FoldingDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "FoldingWidth" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "FoldingWidth" ]
        } ]
      },
      "LabelingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Application" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Face" : {
              "$ref" : "#/components/schemas/Face"
            },
            "Offset" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "LaminatingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "GapList" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "LaminatingBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "LaminatingMethod" : {
              "type" : "string",
              "enum" : [ "CompoundFoil", "DispersionGlue", "Fusing" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "NipWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "Temperature" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Pallet" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "PalletType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "PalletType" ]
        } ]
      },
      "PalletizingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "LayerAmount" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "MaxHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Overhang" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "OverhangOffset" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Pattern" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "PerforatingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Perforate" : {
              "$ref" : "#/components/schemas/Perforate"
            }
          },
          "required" : [ "Perforate" ]
        } ]
      },
      "ProofItem" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Amount" : {
            "type" : "integer"
          },
          "ColorType" : {
            "type" : "string",
            "enum" : [ "Monochrome", "BasicColor", "MatchedColor" ],
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Contract" : {
            "type" : "boolean"
          },
          "HalfTone" : {
            "type" : "boolean"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "PageIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "ProofTarget" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "ScavengerArea" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Center" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Separations" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "Center" ]
        } ]
      },
      "ShapeCuttingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Shape" : {
              "$ref" : "#/components/schemas/Shape"
            },
            "DeliveryMode" : {
              "type" : "string",
              "enum" : [ "FullSheet", "RemoveGripperMargin", "SeparateBlanks" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "DieLayoutRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "ShrinkingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ShrinkingMethod" : {
              "type" : "string",
              "enum" : [ "ShrinkCool", "ShrinkHot" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Temperature" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "SpinePreparationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "MillingDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "NotchingDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "NotchingDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "Operations" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "SealingTemperature" : {
              "type" : "integer"
            },
            "StartPosition" : {
              "type" : "number",
              "format" : "float"
            },
            "WorkingLength" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "SpineTapingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "HorizontalExcess" : {
              "type" : "number",
              "format" : "float"
            },
            "HorizontalExcessBack" : {
              "type" : "number",
              "format" : "float"
            },
            "StripLength" : {
              "type" : "number",
              "format" : "float"
            },
            "TopExcess" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "StackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Disjointing" : {
              "$ref" : "#/components/schemas/Disjointing"
            },
            "BundleType" : {
              "$ref" : "#/components/schemas/BundleType"
            },
            "Compensate" : {
              "type" : "boolean"
            },
            "LayerAmount" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "LayerCompression" : {
              "type" : "boolean"
            },
            "LayerLift" : {
              "type" : "boolean"
            },
            "MaxAmount" : {
              "type" : "integer"
            },
            "MaxHeight" : {
              "type" : "integer"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "MinAmount" : {
              "type" : "integer"
            },
            "OutputBin" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "PreStackAmount" : {
              "type" : "integer"
            },
            "PreStackMethod" : {
              "type" : "string",
              "enum" : [ "All", "First", "None" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "StackAmount" : {
              "type" : "integer"
            },
            "StackCompression" : {
              "type" : "boolean"
            },
            "StandardAmount" : {
              "type" : "integer"
            },
            "UnderLays" : {
              "$ref" : "#/components/schemas/IntegerList"
            }
          }
        } ]
      },
      "StrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "StrappingType" : {
              "type" : "string",
              "enum" : [ "Single", "Double", "Cross", "DoubleCross" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "StrapPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            }
          },
          "required" : [ "StrappingType" ]
        } ]
      },
      "ThreadSealingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BlindStitch" : {
              "type" : "boolean"
            },
            "ThreadLength" : {
              "type" : "number",
              "format" : "float"
            },
            "ThreadPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ThreadStitchWidth" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Tool" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "ToolType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "VarnishingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ModuleType" : {
              "type" : "string",
              "enum" : [ "PrintModule", "CoatingModule" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "VarnishArea" : {
              "type" : "string",
              "enum" : [ "Full", "Spot" ]
            },
            "VarnishMethod" : {
              "type" : "string",
              "enum" : [ "Blanket", "Plate", "Independent" ]
            }
          }
        } ]
      },
      "VerificationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Tolerance" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "VerificationResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "Accepted" : {
              "type" : "integer"
            },
            "Rejected" : {
              "type" : "integer"
            },
            "Unknown" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "WrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "WrappingKind" : {
              "type" : "string",
              "enum" : [ "Band", "LooseWrap", "ShrinkWrap" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "WrappingKind" ]
        } ]
      },
      "BindingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "AdhesiveNote" : {
              "$ref" : "#/components/schemas/AdhesiveNote"
            },
            "EdgeGluing" : {
              "$ref" : "#/components/schemas/EdgeGluing"
            },
            "HardCoverBinding" : {
              "$ref" : "#/components/schemas/HardCoverBinding"
            },
            "LooseBinding" : {
              "$ref" : "#/components/schemas/LooseBinding"
            },
            "SaddleStitching" : {
              "$ref" : "#/components/schemas/SaddleStitching"
            },
            "SideStitching" : {
              "$ref" : "#/components/schemas/SideStitching"
            },
            "SoftCoverBinding" : {
              "$ref" : "#/components/schemas/SoftCoverBinding"
            },
            "Tabs" : {
              "$ref" : "#/components/schemas/Tabs"
            },
            "BackCoverColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "BackCoverColorDetails" : {
              "type" : "string"
            },
            "BindingColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "BindingColorDetails" : {
              "type" : "string"
            },
            "BindingOrder" : {
              "type" : "string",
              "enum" : [ "None", "Collecting", "Gathering" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "BindingSide" : {
              "$ref" : "#/components/schemas/Edge"
            },
            "BindingType" : {
              "type" : "string",
              "enum" : [ "AdhesiveNote", "ChannelBinding", "CoilBinding", "CombBinding", "CornerStitch", "EdgeGluing", "HardCover", "LooseBinding", "None", "RingBinding", "SaddleStitch", "SideStitch", "SoftCover", "StripBinding", "Tape", "WireComb" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ChildRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              },
              "minItems" : 2
            },
            "CoverColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "CoverColorDetails" : {
              "type" : "string"
            }
          },
          "required" : [ "BindingType" ]
        } ]
      },
      "LooseBindingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ChannelBindingDetails" : {
              "$ref" : "#/components/schemas/ChannelBindingDetails"
            },
            "CoilBindingDetails" : {
              "$ref" : "#/components/schemas/CoilBindingDetails"
            },
            "CombBindingDetails" : {
              "$ref" : "#/components/schemas/CombBindingDetails"
            },
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            },
            "RingBindingDetails" : {
              "$ref" : "#/components/schemas/RingBindingDetails"
            },
            "StripBindingDetails" : {
              "$ref" : "#/components/schemas/StripBindingDetails"
            },
            "BindingType" : {
              "type" : "string",
              "enum" : [ "ChannelBinding", "CoilBinding", "CombBinding", "RingBinding", "StripBinding" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "CoverMaterial" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "BindingType" ]
        } ]
      },
      "ColorIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "SurfaceColor" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SurfaceColor"
              }
            }
          }
        } ]
      },
      "ProductionIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "PrintPreference" : {
              "type" : "string",
              "enum" : [ "Balanced", "CostEffective", "Fastest", "HighestQuality" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "PrintProcess" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "EmbossingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "EmbossingItem" : {
              "$ref" : "#/components/schemas/EmbossingItem"
            }
          },
          "required" : [ "EmbossingItem" ]
        } ]
      },
      "FoldingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Crease" : {
              "$ref" : "#/components/schemas/Crease"
            },
            "Fold" : {
              "$ref" : "#/components/schemas/Fold"
            },
            "Perforate" : {
              "$ref" : "#/components/schemas/Perforate"
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "FoldingDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Orientation" : {
              "$ref" : "#/components/schemas/Orientation"
            }
          }
        } ]
      },
      "HoleMakingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            }
          },
          "required" : [ "HolePattern" ]
        } ]
      },
      "AssemblingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "AssemblyItem" : {
              "$ref" : "#/components/schemas/AssemblyItem"
            },
            "BindIn" : {
              "$ref" : "#/components/schemas/BindIn"
            },
            "BlowIn" : {
              "$ref" : "#/components/schemas/BlowIn"
            },
            "StickOn" : {
              "$ref" : "#/components/schemas/StickOn"
            },
            "Container" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            }
          },
          "required" : [ "Container" ]
        } ]
      },
      "IntentResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object"
        } ]
      },
      "LaminatingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Surface" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Side"
              }
            },
            "Temperature" : {
              "type" : "string",
              "enum" : [ "Hot", "Cold" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Texture" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "Surface" ]
        } ]
      },
      "LayoutIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Bleed" : {
              "type" : "number",
              "format" : "float"
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "FinishedDimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "NamedDimensions" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "NumberUp" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Orientation" : {
              "$ref" : "#/components/schemas/Orientation"
            },
            "Pages" : {
              "type" : "integer"
            },
            "Sides" : {
              "$ref" : "#/components/schemas/Sides"
            },
            "SpreadType" : {
              "$ref" : "#/components/schemas/SpreadType"
            }
          }
        } ]
      },
      "MediaIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "BackCoating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "BackISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "Brand" : {
              "type" : "string"
            },
            "BuyerSupplied" : {
              "type" : "boolean"
            },
            "Coating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "Flute" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "ISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "LabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "MediaColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "MediaColorDetails" : {
              "type" : "string"
            },
            "MediaQuality" : {
              "type" : "string"
            },
            "MediaType" : {
              "$ref" : "#/components/schemas/MediaType"
            },
            "MediaTypeDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Opacity" : {
              "$ref" : "#/components/schemas/EnumOpacity"
            },
            "PrePrinted" : {
              "type" : "boolean"
            },
            "StockType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Texture" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            },
            "Weight" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "MediaType" ]
        } ]
      },
      "VariableIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Area" : {
              "type" : "number",
              "format" : "float"
            },
            "AveragePages" : {
              "type" : "integer"
            },
            "ChildRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            },
            "ColorsUsedBack" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ColorsUsedFront" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "MaxPages" : {
              "type" : "integer"
            },
            "MinPages" : {
              "type" : "integer"
            },
            "NumberOfCopies" : {
              "type" : "integer"
            },
            "VariableType" : {
              "type" : "string",
              "enum" : [ "OneLine", "AddressField", "IdentificationField", "Area" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "VariableQuality" : {
              "type" : "string",
              "enum" : [ "Simple", "Imprint", "Full" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "VariableType" ]
        } ]
      },
      "ContentCheckIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "PreflightItem" : {
              "$ref" : "#/components/schemas/PreflightItem"
            },
            "ProofItem" : {
              "$ref" : "#/components/schemas/ProofItem"
            }
          }
        } ]
      },
      "ShapeCuttingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "ShapeCut" : {
              "$ref" : "#/components/schemas/ShapeCut"
            }
          },
          "required" : [ "ShapeCut" ]
        } ]
      },
      "SizeIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object"
        } ]
      },
      "ApprovalDetails" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ApprovalPerson" : {
              "$ref" : "#/components/schemas/ApprovalPerson"
            },
            "Comment" : {
              "$ref" : "#/components/schemas/Comment"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ApprovalState" : {
              "type" : "string",
              "enum" : [ "Approved", "ApprovedWithComment", "Rejected" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ApprovalStateDetails" : {
              "type" : "string"
            }
          },
          "required" : [ "ApprovalState" ]
        } ]
      },
      "ApprovalParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ApprovalPerson" : {
              "$ref" : "#/components/schemas/ApprovalPerson"
            }
          },
          "required" : [ "ApprovalPerson" ]
        } ]
      },
      "Assembly" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AssemblySection" : {
              "$ref" : "#/components/schemas/AssemblySection"
            },
            "BinderySignatureIDs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Order" : {
              "type" : "string",
              "enum" : [ "Collecting", "Gathering", "None", "List" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "Order" ]
        } ]
      },
      "BarcodeCompParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CompensationProcess" : {
              "type" : "string",
              "enum" : [ "Printing", "Platemaking" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "CompensationValue" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "CompensationProcess", "CompensationValue" ]
        } ]
      },
      "BarcodeReproParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BarcodeCompParams" : {
              "$ref" : "#/components/schemas/BarcodeCompParams"
            },
            "BearerBars" : {
              "type" : "string",
              "enum" : [ "None", "TopBottom", "Box", "BoxHMarks" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "Magnification" : {
              "type" : "number",
              "format" : "float"
            },
            "Masking" : {
              "type" : "string",
              "enum" : [ "None", "WhiteBox" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ModuleHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "ModuleWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "Ratio" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "BendingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Bend" : {
              "type" : "boolean"
            },
            "Punch" : {
              "type" : "boolean"
            },
            "PunchType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "BinderySignature" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "MultiPageFold" : {
              "$ref" : "#/components/schemas/MultiPageFold"
            },
            "SignatureCell" : {
              "$ref" : "#/components/schemas/SignatureCell"
            },
            "BinderySignatureSize" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "BinderySignatureType" : {
              "type" : "string",
              "enum" : [ "Fold", "Grid", "Die" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "BindingOrientation" : {
              "$ref" : "#/components/schemas/Orientation"
            },
            "Bottling" : {
              "type" : "string",
              "enum" : [ "All", "Last", "None" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "DieLayoutRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "NumberUp" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Overfold" : {
              "type" : "number",
              "format" : "float"
            },
            "OverfoldSide" : {
              "type" : "string",
              "enum" : [ "Back", "BackHalf", "Front", "FrontHalf" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "SpreadType" : {
              "$ref" : "#/components/schemas/SpreadType"
            },
            "StaggerColumns" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "StaggerContinuous" : {
              "type" : "boolean"
            },
            "StaggerRows" : {
              "$ref" : "#/components/schemas/FloatList"
            }
          },
          "required" : [ "BinderySignatureType" ]
        } ]
      },
      "BoxFoldingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BlankDimensionsX" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "BlankDimensionsY" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "BoxFoldingType" : {
              "type" : "string",
              "enum" : [ "Type00", "Type01", "Type02", "Type03", "Type04", "Type10", "Type11", "Type12", "Type13", "Type15", "Type20" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "BoxFoldingType" ]
        } ]
      },
      "Color" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorMeasurementConditions" : {
              "$ref" : "#/components/schemas/ColorMeasurementConditions"
            },
            "DeviceNColor" : {
              "$ref" : "#/components/schemas/DeviceNColor"
            },
            "ActualColorName" : {
              "type" : "string"
            },
            "CMYK" : {
              "$ref" : "#/components/schemas/CMYKColor"
            },
            "ColorBook" : {
              "type" : "string"
            },
            "ColorBookEntry" : {
              "type" : "string"
            },
            "ColorDetails" : {
              "type" : "string"
            },
            "ColorName" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "ColorType" : {
              "type" : "string",
              "enum" : [ "DieLine", "Normal", "Opaque", "OpaqueIgnore", "Primer", "Transparent" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ColorTypeDetails" : {
              "type" : "string"
            },
            "Density" : {
              "type" : "number",
              "format" : "float"
            },
            "Gray" : {
              "type" : "number",
              "format" : "float"
            },
            "Lab" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "NeutralDensity" : {
              "type" : "number",
              "format" : "float"
            },
            "PrintingTechnology" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "PrintStandard" : {
              "type" : "string"
            },
            "RawName" : {
              "type" : "string"
            },
            "Spectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "sRGB" : {
              "$ref" : "#/components/schemas/sRGBColor"
            }
          }
        } ]
      },
      "ColorantControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorantAlias" : {
              "$ref" : "#/components/schemas/ColorantAlias"
            },
            "DeviceNSpace" : {
              "$ref" : "#/components/schemas/DeviceNSpace"
            },
            "ColorantConvertProcess" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ColorantOrder" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ColorantParams" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "MappingSelection" : {
              "type" : "string",
              "enum" : [ "UsePDLValues", "UseLocalPrinterValues", "UseProcessColorValues" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ProcessColorModel" : {
              "type" : "string",
              "enum" : [ "DeviceCMY", "DeviceCMYK", "DeviceGray", "DeviceN", "DeviceRGB", "None" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "Component" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "Automation" : {
              "$ref" : "#/components/schemas/EnumAutomation"
            },
            "CartonTopFlaps" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Columns" : {
              "type" : "integer"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "MaxHeat" : {
              "type" : "number",
              "format" : "float"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "Overfold" : {
              "type" : "number",
              "format" : "float"
            },
            "OverfoldSide" : {
              "$ref" : "#/components/schemas/Side"
            },
            "ProductType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ProductTypeDetails" : {
              "type" : "string"
            },
            "ReaderPageCount" : {
              "type" : "integer"
            },
            "SurfaceCount" : {
              "type" : "integer"
            },
            "WindingResult" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Contact" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Address" : {
              "$ref" : "#/components/schemas/Address"
            },
            "ComChannel" : {
              "$ref" : "#/components/schemas/ComChannel"
            },
            "Company" : {
              "$ref" : "#/components/schemas/Company"
            },
            "Person" : {
              "$ref" : "#/components/schemas/Person"
            },
            "ContactTypeDetails" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "CostCenterID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "UserID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "Content" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BarcodeProductionParams" : {
              "$ref" : "#/components/schemas/BarcodeProductionParams"
            },
            "ContentMetadata" : {
              "$ref" : "#/components/schemas/ContentMetadata"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ImageCompression" : {
              "$ref" : "#/components/schemas/ImageCompression"
            },
            "OCGControl" : {
              "$ref" : "#/components/schemas/OCGControl"
            },
            "PositionObj" : {
              "$ref" : "#/components/schemas/PositionObj"
            },
            "ScreenSelector" : {
              "$ref" : "#/components/schemas/ScreenSelector"
            },
            "BinderySignatureIDs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ContentStatus" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ContentType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "HasBleeds" : {
              "type" : "boolean"
            },
            "IsBlank" : {
              "type" : "boolean"
            },
            "IsTrapped" : {
              "type" : "boolean"
            },
            "PageLabel" : {
              "type" : "string"
            },
            "Separations" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "SourceBleedBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceClipBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceTrimBox" : {
              "$ref" : "#/components/schemas/rectangle"
            }
          }
        } ]
      },
      "ConventionalPrintingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Drying" : {
              "$ref" : "#/components/schemas/EnumDrying"
            },
            "FirstSurface" : {
              "$ref" : "#/components/schemas/Side"
            },
            "FountainSolution" : {
              "type" : "string",
              "enum" : [ "On", "Off" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ModuleDrying" : {
              "$ref" : "#/components/schemas/EnumDrying"
            },
            "Powder" : {
              "type" : "number",
              "format" : "float"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "Speed" : {
              "type" : "number",
              "format" : "float"
            },
            "WorkStyle" : {
              "$ref" : "#/components/schemas/WorkStyle"
            }
          }
        } ]
      },
      "DeliveryParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "DropItem" : {
              "$ref" : "#/components/schemas/DropItem"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "BuyerAccount" : {
              "type" : "string"
            },
            "Earliest" : {
              "type" : "string",
              "format" : "date-time"
            },
            "EarliestDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "Method" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Ownership" : {
              "type" : "string",
              "enum" : [ "Destination", "Origin" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Required" : {
              "type" : "string",
              "format" : "date-time"
            },
            "RequiredDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "TrackingID" : {
              "type" : "string"
            },
            "Transfer" : {
              "type" : "string",
              "enum" : [ "BuyerToPrinterDeliver", "BuyerToPrinterPickup", "PrinterToBuyerDeliver", "PrinterToBuyerPickup" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "DieLayout" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Media" : {
              "$ref" : "#/components/schemas/Media"
            },
            "RuleLength" : {
              "$ref" : "#/components/schemas/RuleLength"
            },
            "Station" : {
              "$ref" : "#/components/schemas/Station"
            },
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "CutLines" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "DieSide" : {
              "type" : "string",
              "enum" : [ "Up", "Down" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "MediaSide" : {
              "type" : "string",
              "enum" : [ "Front", "Back" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Rotated" : {
              "type" : "boolean"
            },
            "Waste" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "DieLayoutProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ConvertingConfig" : {
              "$ref" : "#/components/schemas/ConvertingConfig"
            },
            "RepeatDesc" : {
              "$ref" : "#/components/schemas/RepeatDesc"
            },
            "Estimate" : {
              "type" : "boolean"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Anchor"
            }
          },
          "required" : [ "ConvertingConfig", "RepeatDesc" ]
        } ]
      },
      "DigitalPrintingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Collate" : {
              "type" : "string",
              "enum" : [ "None", "Sheet" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ManualFeed" : {
              "type" : "boolean"
            },
            "PageDelivery" : {
              "type" : "string",
              "enum" : [ "FanFold", "SameOrderFaceUp", "SameOrderFaceDown", "ReverseOrderFaceUp", "ReverseOrderFaceDown" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "Sides" : {
              "type" : "string",
              "enum" : [ "OneSidedFront", "OneSidedBack", "TwoSided", "Unprinted" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "ExposedMedia" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateType" : {
              "type" : "string",
              "enum" : [ "Exposed", "Dummy" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "PunchType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Resolution" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "MediaRef" ]
        } ]
      },
      "FeedingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CollatingItem" : {
              "$ref" : "#/components/schemas/CollatingItem"
            },
            "Feeder" : {
              "$ref" : "#/components/schemas/Feeder"
            }
          }
        } ]
      },
      "FontPolicy" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PreferredFont" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "UseDefaultFont" : {
              "type" : "boolean"
            },
            "UseFontEmulation" : {
              "type" : "boolean"
            }
          },
          "required" : [ "PreferredFont", "UseDefaultFont", "UseFontEmulation" ]
        } ]
      },
      "ImageCompressionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageCompression" : {
              "$ref" : "#/components/schemas/ImageCompression"
            }
          },
          "required" : [ "ImageCompression" ]
        } ]
      },
      "ImageEnhancementParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageEnhancementOp" : {
              "$ref" : "#/components/schemas/ImageEnhancementOp"
            }
          },
          "required" : [ "ImageEnhancementOp" ]
        } ]
      },
      "ImageSetterParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AdvanceDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "BurnOutArea" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "CenterAcross" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "CutMedia" : {
              "type" : "boolean"
            },
            "ManualFeed" : {
              "type" : "boolean"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "RollCut" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Layout" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "PlacedObject" : {
              "$ref" : "#/components/schemas/PlacedObject"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Position"
            },
            "SheetActivation" : {
              "$ref" : "#/components/schemas/SheetActivation"
            },
            "StripMark" : {
              "$ref" : "#/components/schemas/StripMark"
            },
            "Anchor" : {
              "$ref" : "#/components/schemas/Anchor"
            },
            "Automated" : {
              "type" : "boolean"
            },
            "ExpansionBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "InnermostShingling" : {
              "type" : "number",
              "format" : "float"
            },
            "MaxCollect" : {
              "type" : "integer"
            },
            "MinCollect" : {
              "type" : "integer"
            },
            "OutermostShingling" : {
              "type" : "number",
              "format" : "float"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "SurfaceContentsBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "WorkStyle" : {
              "$ref" : "#/components/schemas/WorkStyle"
            }
          }
        } ]
      },
      "LayoutElementProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            },
            "ShapeDefRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            }
          }
        } ]
      },
      "LayoutShift" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ShiftPoint" : {
              "$ref" : "#/components/schemas/ShiftPoint"
            }
          },
          "required" : [ "ShiftPoint" ]
        } ]
      },
      "ManualLaborParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "LaborType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "LaborType" ]
        } ]
      },
      "Media" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "ColorMeasurementConditions" : {
              "$ref" : "#/components/schemas/ColorMeasurementConditions"
            },
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "MediaLayers" : {
              "$ref" : "#/components/schemas/MediaLayers"
            },
            "TabDimensions" : {
              "$ref" : "#/components/schemas/TabDimensions"
            },
            "BackBrightness" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCIETint" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCIEWhiteness" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCoating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "BackCoatingDetail" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "BackGlossValue" : {
              "type" : "number",
              "format" : "float"
            },
            "BackISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "BackLabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "BackSpectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "Brightness" : {
              "type" : "number",
              "format" : "float"
            },
            "CIETint" : {
              "type" : "number",
              "format" : "float"
            },
            "CIEWhiteness" : {
              "type" : "number",
              "format" : "float"
            },
            "Coating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "CoatingDetail" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "CoreWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Dimension" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Flute" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "GlossValue" : {
              "type" : "number",
              "format" : "float"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "ImagableSide" : {
              "type" : "string",
              "enum" : [ "Front", "Back", "Both", "Neither" ]
            },
            "InnerCoreDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "InsideLoss" : {
              "type" : "number",
              "format" : "float"
            },
            "ISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "LabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "MediaColorName" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "MediaColorNameDetails" : {
              "type" : "string"
            },
            "MediaQuality" : {
              "type" : "string"
            },
            "MediaSetCount" : {
              "type" : "integer"
            },
            "MediaType" : {
              "$ref" : "#/components/schemas/MediaType"
            },
            "MediaTypeDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "MediaUnit" : {
              "type" : "string",
              "enum" : [ "Continuous", "Roll", "Sheet" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Opacity" : {
              "$ref" : "#/components/schemas/EnumOpacity"
            },
            "OpacityLevel" : {
              "type" : "number",
              "format" : "float"
            },
            "OuterCoreDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "OutsideGain" : {
              "type" : "number",
              "format" : "float"
            },
            "PlateTechnology" : {
              "type" : "string",
              "enum" : [ "FlexoAnalogSolvent", "FlexoAnalogThermal", "FlexoDigitalSolvent", "FlexoDigitalThermal", "FlexoDirectEngraving", "InkJet", "Thermal", "UV", "Visible" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "PrintingTechnology" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "RecycledPercentage" : {
              "type" : "number",
              "format" : "float"
            },
            "ReliefThickness" : {
              "type" : "number",
              "format" : "float"
            },
            "RollDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "ShrinkIndex" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "SleeveInterlock" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Spectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "StockType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Texture" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            },
            "Weight" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "MediaType" ]
        } ]
      },
      "MiscConsumable" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "Color" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "ColorDetails" : {
              "type" : "string"
            },
            "Type" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "TypeDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "Type" ]
        } ]
      },
      "PackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object"
        } ]
      },
      "PDLCreationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FontParams" : {
              "$ref" : "#/components/schemas/FontParams"
            },
            "PDFCreationDetails" : {
              "$ref" : "#/components/schemas/PDFCreationDetails"
            },
            "PSCreationDetails" : {
              "$ref" : "#/components/schemas/PSCreationDetails"
            },
            "MimeType" : {
              "type" : "string"
            }
          },
          "required" : [ "MimeType" ]
        } ]
      },
      "PreflightParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "PreflightTest" : {
              "$ref" : "#/components/schemas/PreflightTest"
            }
          }
        } ]
      },
      "PreflightReport" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "PreflightCheck" : {
              "$ref" : "#/components/schemas/PreflightCheck"
            },
            "ErrorCount" : {
              "type" : "integer"
            },
            "WarningCount" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Preview" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Compensation" : {
              "type" : "string",
              "enum" : [ "None", "Film", "Plate", "Press" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "CTM" : {
              "$ref" : "#/components/schemas/matrix"
            },
            "PreviewFileType" : {
              "type" : "string",
              "enum" : [ "PNG", "CIP3Multiple", "CIP3Single" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "QualityControlParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BindingQualityParams" : {
              "$ref" : "#/components/schemas/BindingQualityParams"
            },
            "BindingQuality" : {
              "$ref" : "#/components/schemas/BindingQuality"
            },
            "ColorMeasurement" : {
              "$ref" : "#/components/schemas/ColorMeasurement"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "RegistrationQuality" : {
              "$ref" : "#/components/schemas/RegistrationQuality"
            },
            "Box" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Face"
            },
            "QualityBase" : {
              "type" : "string",
              "enum" : [ "Absolute", "Standard" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "QualityControlMethods" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "SampleInterval" : {
              "type" : "integer"
            },
            "Severity" : {
              "$ref" : "#/components/schemas/Score"
            },
            "SourceDeviceID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "TimeInterval" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "QualityControlResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BindingQualityMeasurement" : {
              "$ref" : "#/components/schemas/BindingQualityMeasurement"
            },
            "BindingQuality" : {
              "$ref" : "#/components/schemas/BindingQuality"
            },
            "ColorMeasurement" : {
              "$ref" : "#/components/schemas/ColorMeasurement"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Inspection" : {
              "$ref" : "#/components/schemas/Inspection"
            },
            "RegistrationQuality" : {
              "$ref" : "#/components/schemas/RegistrationQuality"
            },
            "Box" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "End" : {
              "type" : "string",
              "format" : "date-time"
            },
            "Failed" : {
              "type" : "integer"
            },
            "Measurements" : {
              "type" : "integer"
            },
            "MeasurementUsage" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "Master", "Standard" ],
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Passed" : {
              "type" : "integer"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Face"
            },
            "QualityControlMethods" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Sample" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "Severity" : {
              "$ref" : "#/components/schemas/Score"
            },
            "SourceDeviceID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Start" : {
              "type" : "string",
              "format" : "date-time"
            }
          }
        } ]
      },
      "RegisterMark" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "MarkElement" : {
              "$ref" : "#/components/schemas/MarkElement"
            },
            "Center" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "MarkName" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "MarkType" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "MarkUsage" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "Color", "PaperPath", "Tile" ],
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Rotation" : {
              "type" : "number",
              "format" : "float"
            },
            "Separations" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "RunList" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ByteMap" : {
              "$ref" : "#/components/schemas/ByteMap"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "MetadataMap" : {
              "$ref" : "#/components/schemas/MetadataMap"
            },
            "Automation" : {
              "$ref" : "#/components/schemas/EnumAutomation"
            },
            "ClipPath" : {
              "$ref" : "#/components/schemas/PDFPath"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            },
            "Docs" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "DocPages" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "EndOfDocument" : {
              "type" : "boolean"
            },
            "EndOfSet" : {
              "type" : "boolean"
            },
            "FinishedPages" : {
              "type" : "integer"
            },
            "LogicalPage" : {
              "type" : "integer"
            },
            "NPage" : {
              "type" : "integer"
            },
            "OrdType" : {
              "type" : "string",
              "enum" : [ "Content", "Insert", "Reservation" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Pages" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "Sets" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "SourceBleedBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceClipBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceMediaBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceTrimBox" : {
              "$ref" : "#/components/schemas/rectangle"
            }
          }
        } ]
      },
      "SeparationControlParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AutomatedOverPrintParams" : {
              "$ref" : "#/components/schemas/AutomatedOverPrintParams"
            }
          }
        } ]
      },
      "ShapeDef" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Shape" : {
              "$ref" : "#/components/schemas/Shape"
            },
            "Area" : {
              "type" : "number",
              "format" : "float"
            },
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "CutLines" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "FlatDimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "MediaSide" : {
              "$ref" : "#/components/schemas/Side"
            },
            "ResourceWeight" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "ShapeDefProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ObjectModel" : {
              "$ref" : "#/components/schemas/ObjectModel"
            },
            "ShapeTemplate" : {
              "$ref" : "#/components/schemas/ShapeTemplate"
            }
          }
        } ]
      },
      "SheetOptimizingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ConvertingConfig" : {
              "$ref" : "#/components/schemas/ConvertingConfig"
            },
            "GangElement" : {
              "$ref" : "#/components/schemas/GangElement"
            },
            "Policy" : {
              "type" : "string",
              "enum" : [ "All", "Collect", "Optimized" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "GangElement" ]
        } ]
      },
      "TransferCurve" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CTM" : {
              "$ref" : "#/components/schemas/matrix"
            },
            "Curve" : {
              "$ref" : "#/components/schemas/TransferFunction"
            }
          }
        } ]
      },
      "UsageCounter" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CounterTypes" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Scope" : {
              "type" : "string",
              "enum" : [ "Lifetime", "PowerOn", "Job" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "Scope" ]
        } ]
      },
      "BundlingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Copies" : {
              "type" : "integer"
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "SurfaceColor" : {
        "type" : "object",
        "properties" : {
          "Certification" : {
            "$ref" : "#/components/schemas/Certification"
          },
          "Coatings" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "ColorsUsed" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Coverage" : {
            "type" : "number",
            "format" : "float"
          },
          "PrintStandard" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Surface" : {
            "$ref" : "#/components/schemas/Side"
          }
        },
        "required" : [ "Surface" ]
      },
      "FoldingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Crease" : {
              "$ref" : "#/components/schemas/Crease"
            },
            "Cut" : {
              "$ref" : "#/components/schemas/Cut"
            },
            "Fold" : {
              "$ref" : "#/components/schemas/Fold"
            },
            "Perforate" : {
              "$ref" : "#/components/schemas/Perforate"
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "FoldingDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "HoleMakingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            }
          },
          "required" : [ "HolePattern" ]
        } ]
      },
      "StitchingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Angle" : {
              "type" : "number",
              "format" : "float"
            },
            "NumberOfStitches" : {
              "type" : "integer"
            },
            "Offset" : {
              "type" : "number",
              "format" : "float"
            },
            "StapleShape" : {
              "$ref" : "#/components/schemas/StapleShape"
            },
            "StitchOrigin" : {
              "type" : "string",
              "enum" : [ "TrimBoxCenter", "TrimBoxJogSide", "UntrimmedJogSide" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "StitchPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "StitchType" : {
              "type" : "string",
              "enum" : [ "Corner", "Saddle", "Side" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "StitchWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "TightBacking" : {
              "type" : "string",
              "enum" : [ "Round", "RoundBacked", "Flat", "FlatBacked" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "WireGauge" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "ThreadSewingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BlindStitch" : {
              "type" : "boolean"
            },
            "NeedlePositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "NumberOfNeedles" : {
              "type" : "integer"
            },
            "Offset" : {
              "type" : "number",
              "format" : "float"
            },
            "SewingPattern" : {
              "type" : "string",
              "enum" : [ "CombinedStaggered", "Normal", "Side", "Staggered" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ThreadThickness" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "TrimmingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "TrimCover" : {
              "type" : "string",
              "enum" : [ "Back", "Both", "Front", "Neither" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "TrimmingOffset" : {
              "type" : "number",
              "format" : "float"
            },
            "Width" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "WebInlineFinishingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FolderProduction" : {
              "$ref" : "#/components/schemas/FolderProduction"
            },
            "ProductionPath" : {
              "$ref" : "#/components/schemas/ProductionPath"
            }
          }
        } ]
      },
      "ColorCorrectionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorCorrectionOp" : {
              "$ref" : "#/components/schemas/ColorCorrectionOp"
            }
          }
        } ]
      },
      "ColorSpaceConversionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorSpaceConversionOp" : {
              "$ref" : "#/components/schemas/ColorSpaceConversionOp"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ICCProfileUsage" : {
              "type" : "string",
              "enum" : [ "UsePDL", "UseSupplied" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "Ink" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "InkType" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "SpecificYield" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "InkZoneCalculationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            },
            "PrintableArea" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "ZoneHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Zones" : {
              "type" : "integer"
            },
            "ZonesY" : {
              "type" : "integer"
            },
            "ZoneWidth" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "InkZoneProfile" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ZoneHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "ZoneSettingsX" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ZoneSettingsY" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ZoneWidth" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "ZoneSettingsX", "ZoneWidth" ]
        } ]
      },
      "PreviewGenerationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AspectRatio" : {
              "type" : "string",
              "enum" : [ "CenterMax", "CenterMin", "Crop", "Expand", "Ignore" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Resolution" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "RenderingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AutomatedOverPrintParams" : {
              "$ref" : "#/components/schemas/AutomatedOverPrintParams"
            },
            "ObjectResolution" : {
              "$ref" : "#/components/schemas/ObjectResolution"
            },
            "TIFFFormatParams" : {
              "$ref" : "#/components/schemas/TIFFFormatParams"
            },
            "BandHeight" : {
              "type" : "integer"
            },
            "BandOrdering" : {
              "type" : "string",
              "enum" : [ "BandMajor", "ColorMajor" ],
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "BandWidth" : {
              "type" : "integer"
            },
            "ColorantDepth" : {
              "type" : "integer"
            },
            "Interleaved" : {
              "type" : "boolean"
            },
            "MimeType" : {
              "type" : "string"
            }
          }
        } ]
      },
      "ScreeningParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ScreenSelector" : {
              "$ref" : "#/components/schemas/ScreenSelector"
            },
            "IgnoreSourceFile" : {
              "type" : "boolean"
            }
          },
          "required" : [ "ScreenSelector" ]
        } ]
      },
      "TrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageInternalTrapping" : {
              "type" : "boolean"
            },
            "ImageMaskTrapping" : {
              "type" : "boolean"
            },
            "ImageToImageTrapping" : {
              "type" : "boolean"
            },
            "ImageToObjectTrapping" : {
              "type" : "boolean"
            },
            "MinimumBlackWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "StepLimit" : {
              "type" : "number",
              "format" : "float"
            },
            "TrapColorScaling" : {
              "type" : "number",
              "format" : "float"
            },
            "TrapWidth" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "PrintCondition" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorantOrder" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Name" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "PrintQuality" : {
              "$ref" : "#/components/schemas/PrintQuality"
            }
          },
          "required" : [ "ColorantOrder", "Name" ]
        } ]
      },
      "WindingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Copies" : {
              "type" : "integer"
            },
            "Diameter" : {
              "type" : "number",
              "format" : "float"
            },
            "Fixation" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "RasterReadingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "Center" : {
              "type" : "boolean"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "Scaling" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "ScalingOrigin" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "CommandModifyQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ModifyQueueEntryParams" : {
              "$ref" : "#/components/schemas/ModifyQueueEntryParams"
            }
          },
          "required" : [ "ModifyQueueEntryParams" ]
        } ]
      },
      "ResponseModifyQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "QueueEntry" : {
              "$ref" : "#/components/schemas/QueueEntry"
            }
          }
        } ]
      },
      "CommandForceGang" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "GangCmdFilter" : {
              "$ref" : "#/components/schemas/GangCmdFilter"
            }
          },
          "required" : [ "GangCmdFilter" ]
        } ]
      },
      "ResponseForceGang" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "QueryGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "GangQuFilter" : {
              "$ref" : "#/components/schemas/GangQuFilter"
            }
          }
        } ]
      },
      "ResponseGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "GangInfo" : {
              "$ref" : "#/components/schemas/GangInfo"
            }
          }
        } ]
      },
      "SignalGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "GangInfo" : {
              "$ref" : "#/components/schemas/GangInfo"
            }
          }
        } ]
      },
      "QueryKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceFilter" : {
              "$ref" : "#/components/schemas/DeviceFilter"
            }
          }
        } ]
      },
      "ResponseKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            }
          }
        } ]
      },
      "SignalKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            }
          }
        } ]
      },
      "QueryKnownMessages" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object"
        } ]
      },
      "ResponseKnownMessages" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "MessageService" : {
              "$ref" : "#/components/schemas/MessageService"
            }
          }
        } ]
      },
      "QueryKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionFilter" : {
              "$ref" : "#/components/schemas/SubscriptionFilter"
            }
          }
        } ]
      },
      "ResponseKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "$ref" : "#/components/schemas/SubscriptionInfo"
            }
          }
        } ]
      },
      "SignalKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "$ref" : "#/components/schemas/SubscriptionInfo"
            }
          }
        } ]
      },
      "QueryNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "NotificationFilter" : {
              "$ref" : "#/components/schemas/NotificationFilter"
            }
          }
        } ]
      },
      "ResponseNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "SignalNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            }
          },
          "required" : [ "Notification" ]
        } ]
      },
      "CommandPipeControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "PipeParams" : {
              "$ref" : "#/components/schemas/PipeParams"
            }
          },
          "required" : [ "PipeParams" ]
        } ]
      },
      "ResponsePipeControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "QueryQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "QueueStatusParams" : {
              "$ref" : "#/components/schemas/QueueStatusParams"
            }
          }
        } ]
      },
      "ResponseQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "Queue" : {
              "$ref" : "#/components/schemas/Queue"
            }
          }
        } ]
      },
      "SignalQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Queue" : {
              "$ref" : "#/components/schemas/Queue"
            }
          },
          "required" : [ "Queue" ]
        } ]
      },
      "CommandRequestQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "RequestQueueEntryParams" : {
              "$ref" : "#/components/schemas/RequestQueueEntryParams"
            }
          }
        } ]
      },
      "ResponseRequestQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "CommandResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceCmdParams" : {
              "$ref" : "#/components/schemas/ResourceCmdParams"
            }
          },
          "required" : [ "ResourceCmdParams" ]
        } ]
      },
      "QueryResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceQuParams" : {
              "$ref" : "#/components/schemas/ResourceQuParams"
            }
          },
          "required" : [ "ResourceQuParams" ]
        } ]
      },
      "ResponseResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "$ref" : "#/components/schemas/ResourceInfo"
            }
          }
        } ]
      },
      "SignalResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "$ref" : "#/components/schemas/ResourceInfo"
            }
          }
        } ]
      },
      "CommandResubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ResubmissionParams" : {
              "$ref" : "#/components/schemas/ResubmissionParams"
            }
          },
          "required" : [ "ResubmissionParams" ]
        } ]
      },
      "ResponseResubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "CommandReturnQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ReturnQueueEntryParams" : {
              "$ref" : "#/components/schemas/ReturnQueueEntryParams"
            }
          },
          "required" : [ "ReturnQueueEntryParams" ]
        } ]
      },
      "ResponseReturnQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "CommandShutDown" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ShutDownCmdParams" : {
              "$ref" : "#/components/schemas/ShutDownCmdParams"
            }
          },
          "required" : [ "ShutDownCmdParams" ]
        } ]
      },
      "ResponseShutDown" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "QueryStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "StatusQuParams" : {
              "$ref" : "#/components/schemas/StatusQuParams"
            }
          }
        } ]
      },
      "ResponseStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          }
        } ]
      },
      "SignalStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          },
          "required" : [ "DeviceInfo" ]
        } ]
      },
      "CommandStopPersistentChannel" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "StopPersChParams" : {
              "$ref" : "#/components/schemas/StopPersChParams"
            }
          },
          "required" : [ "StopPersChParams" ]
        } ]
      },
      "ResponseStopPersistentChannel" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "$ref" : "#/components/schemas/SubscriptionInfo"
            }
          }
        } ]
      },
      "CommandSubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "QueueSubmissionParams" : {
              "$ref" : "#/components/schemas/QueueSubmissionParams"
            }
          },
          "required" : [ "QueueSubmissionParams" ]
        } ]
      },
      "ResponseSubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "QueueEntry" : {
              "$ref" : "#/components/schemas/QueueEntry"
            }
          }
        } ]
      },
      "CommandWakeUp" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object"
        } ]
      },
      "ResponseWakeUp" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "language" : {
        "type" : "string"
      },
      "languages" : {
        "type" : "array",
        "items" : {
          "$ref" : "#/components/schemas/language"
        }
      },
      "PDFPath" : {
        "type" : "string"
      },
      "PrintQuality" : {
        "type" : "string",
        "enum" : [ "High", "Normal", "Draft" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "rectangle" : {
        "minItems" : 4,
        "maxItems" : 4,
        "$ref" : "#/components/schemas/FloatList"
      },
      "IntegerRange" : {
        "minItems" : 2,
        "maxItems" : 2,
        "$ref" : "#/components/schemas/IntegerList"
      },
      "IntegerList" : {
        "type" : "array",
        "items" : {
          "type" : "integer"
        }
      },
      "FloatList" : {
        "type" : "array",
        "items" : {
          "type" : "number",
          "format" : "float"
        }
      },
      "shape" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "URL" : {
        "type" : "string",
        "format" : "uri"
      },
      "XPath" : {
        "type" : "string"
      },
      "regExp" : {
        "type" : "string"
      },
      "XYPair" : {
        "minItems" : 2,
        "maxItems" : 2,
        "$ref" : "#/components/schemas/FloatList"
      },
      "matrix" : {
        "minItems" : 6,
        "maxItems" : 6,
        "$ref" : "#/components/schemas/FloatList"
      },
      "LabColor" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "CMYKColor" : {
        "minItems" : 4,
        "maxItems" : 4,
        "$ref" : "#/components/schemas/FloatList"
      },
      "TransferFunction" : {
        "$ref" : "#/components/schemas/FloatList"
      },
      "Version" : {
        "type" : "string",
        "enum" : [ "2.0", "2.1" ]
      },
      "sRGBColor" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "FoldCatalog" : {
        "type" : "string",
        "pattern" : "F[0-9]+-([0-9]+|X)"
      },
      "MediaType" : {
        "type" : "string",
        "enum" : [ "Blanket", "CorrugatedBoard", "Disc", "EmbossingFoil", "Film", "Foil", "GravureCylinder", "ImagingCylinder", "LaminatingFoil", "MountingTape", "Other", "Paper", "Plate", "Screen", "SelfAdhesive", "ShrinkFoil", "Sleeve", "Textile", "Transparency", "Vinyl" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Activation" : {
        "type" : "string",
        "enum" : [ "Informative", "Held", "Active", "PendingReturn", "Removed" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "BundleType" : {
        "type" : "string",
        "enum" : [ "BoundSet", "Box", "Carton", "CollectedStack", "CompensatedStack", "Product", "Pallet", "Roll", "Sheet", "Stack", "StrappedStack", "StrappedCompensatedStack", "WrappedBundle" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Side" : {
        "type" : "string",
        "enum" : [ "Back", "Front" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "NodeStatus" : {
        "type" : "string",
        "enum" : [ "Aborted", "Cleanup", "Completed", "InProgress", "Setup", "Stopped", "Suspended", "Waiting" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumChannelMode" : {
        "type" : "string",
        "enum" : [ "FireAndForget", "Reliable" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Scope" : {
        "type" : "string",
        "enum" : [ "Allowed", "Estimate", "Job", "Present" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumGangPolicy" : {
        "type" : "string",
        "enum" : [ "Gang", "GangAndForce", "NoGang" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Edge" : {
        "type" : "string",
        "enum" : [ "Bottom", "Left", "Right", "Top" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Face" : {
        "type" : "string",
        "enum" : [ "Back", "Bottom", "Front", "Left", "Right", "Top" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumGlue" : {
        "type" : "string",
        "enum" : [ "ColdGlue", "Hotmelt", "PUR" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "TightBacking" : {
        "type" : "string",
        "enum" : [ "Round", "RoundBacked", "Flat", "FlatBacked" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumEmbossDirection" : {
        "type" : "string",
        "enum" : [ "Both", "Depressed", "Flat", "Raised" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Sides" : {
        "type" : "string",
        "enum" : [ "OneSided", "OneSidedBack", "TwoSidedHeadToFoot", "TwoSidedHeadToHead" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "MediaDirection" : {
        "type" : "string",
        "enum" : [ "Any", "SameDirection", "XDirection", "YDirection" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumOpacity" : {
        "type" : "string",
        "enum" : [ "Opaque", "Translucent", "Transparent" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumPreflightAction" : {
        "type" : "string",
        "enum" : [ "Abort", "Continue", "Repair" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumDeviceAxis" : {
        "type" : "string",
        "enum" : [ "None", "FeedDirection", "MediaWidth", "Both" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Polarity" : {
        "type" : "string",
        "enum" : [ "Negative", "Positive" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumAutomation" : {
        "type" : "string",
        "enum" : [ "Dynamic", "Static" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "PositionPolicy" : {
        "type" : "string",
        "enum" : [ "Exact", "Free" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumDrying" : {
        "type" : "string",
        "enum" : [ "Heatset", "IR", "Off", "On", "UV" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "SheetLay" : {
        "type" : "string",
        "enum" : [ "Center", "Left", "Right" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "RenderingIntent" : {
        "type" : "string",
        "enum" : [ "AbsoluteColorimetric", "ColorSpaceDependent", "Perceptual", "RelativeColorimetric", "Saturation" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumIncludeResources" : {
        "type" : "string",
        "enum" : [ "IncludeNever", "IncludeOncePerDoc", "IncludeOncePerPage" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "ISOPaperSubstrate" : {
        "type" : "string",
        "enum" : [ "PS1", "PS2", "PS3", "PS4", "PS5", "PS6", "PS7", "PS8", "LWCPlus", "LWCStandard", "NewsPlus", "SCPlus", "SCStandard", "SNP" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EmbossType" : {
        "type" : "string",
        "enum" : [ "BlindEmbossing", "Braille", "EmbossedFinish", "FoilEmbossing", "FoilStamping" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumFitPolicy" : {
        "type" : "string",
        "enum" : [ "NoRepeat", "RepeatToFill", "RepeatUnclipped", "StretchToFit", "UndistortedScaleToFit" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumFeedQuality" : {
        "type" : "string",
        "enum" : [ "NotActive", "Check", "Waste", "StopNoWaste", "StopWaste" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "EnumTopBottom" : {
        "type" : "string",
        "enum" : [ "Top", "Bottom" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "Anchor" : {
        "type" : "string",
        "enum" : [ "BottomCenter", "BottomLeft", "BottomRight", "Center", "CenterLeft", "CenterRight", "TopCenter", "TopLeft", "TopRight" ]
      },
      "NamedColor" : {
        "type" : "string",
        "pattern" : "((A|a)(L|l)(I|i)(C|c)(E|e)(B|b)(L|l)(U|u)(E|e))"
      },
      "Orientation" : {
        "type" : "string",
        "enum" : [ "Rotate0", "Rotate90", "Rotate180", "Rotate270", "Flip0", "Flip90", "Flip180", "Flip270" ]
      },
      "WorkStyle" : {
        "type" : "string",
        "enum" : [ "Perfecting", "Simplex", "WorkAndBack", "WorkAndTumble", "WorkAndTurn" ]
      },
      "Coating" : {
        "type" : "string",
        "enum" : [ "Coated", "Gloss", "Matte", "None", "Satin" ]
      },
      "SourceObjects" : {
        "type" : "array",
        "items" : {
          "type" : "string",
          "enum" : [ "ImagePhotographic", "ImageScreenShot", "LineArt", "SmoothShades", "Text" ]
        }
      },
      "textElement" : {
        "type" : "string"
      },
      "Severity" : {
        "type" : "string",
        "enum" : [ "Event", "Information", "Warning", "Error", "Fatal" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "DeviceStatus" : {
        "type" : "string",
        "enum" : [ "Cleanup", "Idle", "NonProductive", "Offline", "Production", "Setup", "Stopped" ]
      },
      "UpdateGranularity" : {
        "type" : "string",
        "enum" : [ "All", "ChangesOnly" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "StapleShape" : {
        "type" : "string",
        "enum" : [ "Butted", "ClinchOut", "Crown", "Eyelet", "Overlap" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      },
      "SpreadType" : {
        "type" : "string",
        "enum" : [ "SinglePage", "Spread" ],
        "pattern" : "^[a-zA-Z0-9._\\-:]*$"
      }
    }
  }
}