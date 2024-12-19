window.swaggerSpec={
  "openapi" : "3.1.0",
  "info" : {
    "title" : "CLOUD-XJDF",
    "description" : "The json flavour of XJDF",
    "version" : "0.0.1"
  },
  "paths" : {
    "/wake-up" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandWakeUp" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandWakeUp"
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
                    "ResponseWakeUp" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseWakeUp"
                    },
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseWakeUp" ]
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandForceGang" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandForceGang"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "ResponseForceGang" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseForceGang"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseForceGang" ]
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandStopPersistentChannel" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandStopPersistentChannel"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseStopPersistentChannel" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseStopPersistentChannel"
                    }
                  },
                  "required" : [ "Header", "ResponseStopPersistentChannel" ]
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandModifyQueueEntry" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandModifyQueueEntry"
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
                    "ResponseModifyQueueEntry" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseModifyQueueEntry"
                    },
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseModifyQueueEntry" ]
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryQueueStatus" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryQueueStatus"
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
                    "ResponseQueueStatus" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseQueueStatus"
                    },
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseQueueStatus" ]
                }
              }
            }
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
                  "CommandResubmitQueueEntry" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandResubmitQueueEntry"
                  },
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseResubmitQueueEntry" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseResubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseResubmitQueueEntry" ]
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandRequestQueueEntry" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandRequestQueueEntry"
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
                    "ResponseRequestQueueEntry" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseRequestQueueEntry"
                    },
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseRequestQueueEntry" ]
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandResource" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandResource"
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
                    "ResponseResource" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseResource"
                    },
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryKnownMessages" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryKnownMessages"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseKnownMessages" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseKnownMessages"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownMessages" ]
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
                  "CommandPipeControl" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandPipeControl"
                  },
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponsePipeControl" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponsePipeControl"
                    }
                  },
                  "required" : [ "Header", "ResponsePipeControl" ]
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandReturnQueueEntry" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandReturnQueueEntry"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseReturnQueueEntry" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseReturnQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseReturnQueueEntry" ]
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
                  "QueryNotification" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryNotification"
                  },
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "ResponseNotification" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseNotification"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseNotification" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryNotification/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalNotification" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/SignalNotification"
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
                            "Header" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryStatus" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryStatus"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseStatus" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseStatus" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalStatus" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/SignalStatus"
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
                            "Header" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/queue-entry/submit" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "CommandSubmitQueueEntry" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandSubmitQueueEntry"
                  },
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  }
                },
                "required" : [ "Header", "CommandSubmitQueueEntry" ]
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseSubmitQueueEntry" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseSubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseSubmitQueueEntry" ]
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryGangStatus" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryGangStatus"
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
                    "ResponseGangStatus" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseGangStatus"
                    },
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseGangStatus" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryGangStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "SignalGangStatus" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/SignalGangStatus"
                          },
                          "Header" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                          },
                          "Version" : {
                            "type" : "string"
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
                            "Header" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "QueryKnownDevices" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryKnownDevices"
                  },
                  "Version" : {
                    "type" : "string"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseKnownDevices" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseKnownDevices"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownDevices" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryKnownDevices/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalKnownDevices" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/SignalKnownDevices"
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
                            "Header" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
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
                  "QueryKnownSubscriptions" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryKnownSubscriptions"
                  },
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseKnownSubscriptions" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseKnownSubscriptions"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownSubscriptions" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryKnownSubscriptions/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalKnownSubscriptions" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/SignalKnownSubscriptions"
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
                            "Header" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryResource" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/QueryResource"
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
                    "ResponseResource" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseResource"
                    },
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryResource/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalResource" : {
                            "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/SignalResource"
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
                            "Header" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
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
                  "Header" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandShutDown" : {
                    "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/CommandShutDown"
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
                    "Header" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjdf.json#/$defs/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseShutDown" : {
                      "$ref" : "https://schema.cip4.org/jdfschema_2_2/xjmf.json#/$defs/ResponseShutDown"
                    }
                  },
                  "required" : [ "Header", "ResponseShutDown" ]
                }
              }
            }
          }
        }
      }
    }
  },
  "components" : { }
}